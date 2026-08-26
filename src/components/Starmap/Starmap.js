import React from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Stars, Html, OrbitControls } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import { Howl } from 'howler';

import { DESTINATIONS, HUD } from './Starmap.constants';

const hoverSound = new Howl({ src: ['/sounds/hover.mp3'], volume: 0.35 });
const clickSound = new Howl({ src: ['/sounds/click.mp3'], volume: 0.5 });

const makeGlowTexture = color => {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 256;
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
  gradient.addColorStop(0, color);
  gradient.addColorStop(0.35, color + '66');
  gradient.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 256, 256);
  return new THREE.CanvasTexture(canvas);
};

// Radial band texture for the planetary ring (uv.x = inner→outer radius).
const makeRingTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 1;
  const ctx = canvas.getContext('2d');
  const bands = [
    [0.0, 0.08, 'rgba(157, 110, 255, 0)'],
    [0.08, 0.22, 'rgba(157, 110, 255, 0.55)'],
    [0.22, 0.3, 'rgba(120, 90, 200, 0.15)'],
    [0.3, 0.55, 'rgba(190, 160, 255, 0.5)'],
    [0.55, 0.62, 'rgba(120, 90, 200, 0.1)'],
    [0.62, 0.85, 'rgba(157, 110, 255, 0.4)'],
    [0.85, 1.0, 'rgba(157, 110, 255, 0.08)']
  ];
  bands.forEach(([from, to, color]) => {
    ctx.fillStyle = color;
    ctx.fillRect(Math.floor(from * 256), 0, Math.ceil((to - from) * 256), 1);
  });
  return new THREE.CanvasTexture(canvas);
};

const useSrgb = texture => {
  React.useMemo(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 8;
  }, [texture]);
  return texture;
};

// Real Milky Way panorama on an inverted sphere, drifting slowly.
const Skybox = () => {
  const texture = useSrgb(useLoader(THREE.TextureLoader, '/textures/milkyway_8k.jpg'));
  const meshRef = React.useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.0035;
    }
  });

  return (
    <mesh ref={meshRef} rotation-z={0.35}>
      <sphereGeometry args={[180, 64, 64]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} depthWrite={false} />
    </mesh>
  );
};

const Nebula = ({ position, color, scale }) => {
  const texture = React.useMemo(() => makeGlowTexture(color), [color]);
  return (
    <sprite position={position} scale={[scale, scale, 1]}>
      <spriteMaterial
        map={texture}
        transparent
        opacity={0.2}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </sprite>
  );
};

Nebula.propTypes = {
  position: PropTypes.array.isRequired,
  color: PropTypes.string.isRequired,
  scale: PropTypes.number.isRequired
};

const Sun = () => {
  const texture = useSrgb(useLoader(THREE.TextureLoader, '/textures/planets/2k_sun.jpg'));
  const glowTexture = React.useMemo(() => makeGlowTexture('#FFCC66'), []);
  const meshRef = React.useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.4, 64, 64]} />
        <meshBasicMaterial map={texture} />
      </mesh>
      <sprite scale={[8, 8, 1]}>
        <spriteMaterial
          map={glowTexture}
          transparent
          opacity={0.5}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </sprite>
      <pointLight color='#FFE0A3' intensity={2.4} distance={80} decay={1.4} />
    </group>
  );
};

// Fresnel rim glow rendered on a slightly larger back-side sphere.
const Atmosphere = ({ size, color, boosted }) => {
  const material = React.useMemo(() => {
    return new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uColor: { value: new THREE.Color(color) },
        uStrength: { value: 0.9 }
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vViewDir;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vNormal = normalize(mat3(modelMatrix) * normal);
          vViewDir = normalize(cameraPosition - worldPosition.xyz);
          gl_Position = projectionMatrix * viewMatrix * worldPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        uniform float uStrength;
        varying vec3 vNormal;
        varying vec3 vViewDir;
        void main() {
          float rim = pow(1.0 + dot(vNormal, vViewDir), 2.6);
          gl_FragColor = vec4(uColor, rim * uStrength);
        }
      `
    });
  }, [color]);

  React.useEffect(() => {
    material.uniforms.uStrength.value = boosted ? 1.4 : 0.55;
  }, [material, boosted]);

  return (
    <mesh material={material}>
      <sphereGeometry args={[size * 1.08, 48, 48]} />
    </mesh>
  );
};

Atmosphere.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  boosted: PropTypes.bool
};

const PlanetRing = ({ size }) => {
  const texture = React.useMemo(() => makeRingTexture(), []);
  const geometry = React.useMemo(() => {
    const inner = size * 1.45;
    const outer = size * 2.5;
    const geo = new THREE.RingGeometry(inner, outer, 128, 1);
    // Remap UVs so uv.x runs inner→outer radius (for the band texture).
    const pos = geo.attributes.position;
    const v3 = new THREE.Vector3();
    for (let i = 0; i < pos.count; i++) {
      v3.fromBufferAttribute(pos, i);
      const t = (v3.length() - inner) / (outer - inner);
      geo.attributes.uv.setXY(i, t, 0.5);
    }
    return geo;
  }, [size]);

  return (
    <mesh geometry={geometry} rotation-x={-Math.PI / 2}>
      <meshBasicMaterial
        map={texture}
        transparent
        opacity={0.85}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
};

PlanetRing.propTypes = {
  size: PropTypes.number.isRequired
};

const CloudLayer = ({ size, textureUrl }) => {
  const texture = useSrgb(useLoader(THREE.TextureLoader, textureUrl));
  const meshRef = React.useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.03;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[size * 1.015, 48, 48]} />
      <meshStandardMaterial
        map={texture}
        transparent
        opacity={0.45}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
};

CloudLayer.propTypes = {
  size: PropTypes.number.isRequired,
  textureUrl: PropTypes.string.isRequired
};

// Corner-bracket selection reticle (screen-space, drawn around the hovered planet).
const Reticle = () => {
  const corner = (position, borders) => (
    <div
      key={borders}
      style={{
        position: 'absolute',
        width: 18,
        height: 18,
        borderColor: HUD.goldBright,
        borderStyle: 'solid',
        borderWidth: 0,
        boxShadow: `0 0 8px ${HUD.gold}66`,
        ...position,
        ...(borders === 'tl' && { borderTopWidth: 2, borderLeftWidth: 2 }),
        ...(borders === 'tr' && { borderTopWidth: 2, borderRightWidth: 2 }),
        ...(borders === 'bl' && { borderBottomWidth: 2, borderLeftWidth: 2 }),
        ...(borders === 'br' && { borderBottomWidth: 2, borderRightWidth: 2 })
      }}
    />
  );

  return (
    <Html center zIndexRange={[10, 0]} style={{ pointerEvents: 'none' }}>
      <div style={{ position: 'relative', width: 92, height: 92 }}>
        {corner({ top: 0, left: 0 }, 'tl')}
        {corner({ top: 0, right: 0 }, 'tr')}
        {corner({ bottom: 0, left: 0 }, 'bl')}
        {corner({ bottom: 0, right: 0 }, 'br')}
      </div>
    </Html>
  );
};

const OrbitRing = ({ radius, active, color }) => (
  <mesh rotation-x={-Math.PI / 2}>
    <ringGeometry args={[radius - 0.02, radius + 0.02, 160]} />
    <meshBasicMaterial
      color={active ? color : '#2A4A7A'}
      transparent
      opacity={active ? 0.9 : 0.45}
      side={THREE.DoubleSide}
      depthWrite={false}
    />
  </mesh>
);

OrbitRing.propTypes = {
  radius: PropTypes.number.isRequired,
  active: PropTypes.bool,
  color: PropTypes.string.isRequired
};

const AsteroidBelt = ({ radius, count }) => {
  const groupRef = React.useRef();
  const matrices = React.useMemo(() => {
    const dummy = new THREE.Object3D();
    const list = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + Math.sin(i * 13.7) * 0.12;
      const r = radius + Math.sin(i * 7.3) * 0.55;
      dummy.position.set(
        Math.cos(angle) * r,
        Math.sin(i * 3.1) * 0.18,
        Math.sin(angle) * r
      );
      const s = 0.02 + Math.abs(Math.sin(i * 5.9)) * 0.05;
      dummy.scale.setScalar(s);
      dummy.rotation.set(i * 0.7, i * 1.3, i * 2.1);
      dummy.updateMatrix();
      list.push(dummy.matrix.clone());
    }
    return list;
  }, [radius, count]);

  const instancedRef = React.useCallback(mesh => {
    if (!mesh) return;
    matrices.forEach((matrix, i) => mesh.setMatrixAt(i, matrix));
    mesh.instanceMatrix.needsUpdate = true;
  }, [matrices]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.008;
    }
  });

  return (
    <group ref={groupRef}>
      <instancedMesh ref={instancedRef} args={[null, null, count]}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color='#6E7B8A' roughness={0.9} metalness={0.1} />
      </instancedMesh>
    </group>
  );
};

AsteroidBelt.propTypes = {
  radius: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired
};

const Planet = ({ dest, hovered, dimmed, onHover, onSelect, positionsRef }) => {
  const groupRef = React.useRef();
  const meshRef = React.useRef();
  const texture = useSrgb(useLoader(THREE.TextureLoader, dest.texture));

  useFrame(({ clock }, delta) => {
    const angle = dest.phase + clock.elapsedTime * dest.speed;
    if (groupRef.current) {
      groupRef.current.position.set(
        Math.cos(angle) * dest.radius,
        0,
        Math.sin(angle) * dest.radius
      );
      positionsRef.current[dest.id] = groupRef.current.position;
    }
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * dest.spin;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Axial tilt group: surface, clouds and ring share the equatorial plane */}
      <group rotation-z={dest.tilt}>
        <mesh
          ref={meshRef}
          onPointerOver={event => {
            event.stopPropagation();
            onHover(dest.id);
          }}
          onPointerOut={() => onHover(null)}
          onClick={event => {
            event.stopPropagation();
            onSelect(dest);
          }}
        >
          <sphereGeometry args={[dest.size, 56, 56]} />
          <meshStandardMaterial
            map={texture}
            roughness={0.9}
            metalness={0}
            emissive={dest.color}
            emissiveIntensity={hovered ? 0.16 : 0.05}
          />
        </mesh>
        {dest.clouds && <CloudLayer size={dest.size} textureUrl={dest.clouds} />}
        {dest.ring && <PlanetRing size={dest.size} />}
      </group>
      <Atmosphere size={dest.size} color={dest.color} boosted={hovered} />
      {hovered && <Reticle />}
      <Html
        position={[0, dest.size + 0.85, 0]}
        center
        zIndexRange={[10, 0]}
        style={{ pointerEvents: 'none' }}
      >
        <div
          data-starmap-label={dest.id}
          onClick={() => onSelect(dest)}
          onMouseEnter={() => onHover(dest.id)}
          onMouseLeave={() => onHover(null)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            opacity: dimmed ? 0.25 : 1,
            transition: 'opacity 200ms ease',
            whiteSpace: 'nowrap',
            fontFamily: HUD.font,
            textShadow: '0 0 10px rgba(0,0,0,0.95), 0 0 4px rgba(0,0,0,0.9)',
            pointerEvents: 'auto',
            cursor: 'pointer',
            padding: '6px 14px'
          }}
        >
          <span
            style={{
              color: hovered ? HUD.goldBright : '#C6DFF5',
              fontSize: 17,
              letterSpacing: 5,
              fontWeight: 700
            }}
          >
            ◇ {dest.label}
          </span>
          <span
            style={{
              color: hovered ? HUD.gold : '#7E9FBE',
              fontSize: 11,
              letterSpacing: 3,
              marginTop: 3
            }}
          >
            {dest.sub}
          </span>
        </div>
      </Html>
    </group>
  );
};

Planet.propTypes = {
  dest: PropTypes.object.isRequired,
  hovered: PropTypes.bool,
  dimmed: PropTypes.bool,
  onHover: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  positionsRef: PropTypes.object.isRequired
};

// Dives the camera toward the selected planet while the page fade-out runs.
const CameraRig = ({ leavingId, positionsRef }) => {
  const target = React.useMemo(() => new THREE.Vector3(), []);

  useFrame(({ camera }) => {
    if (!leavingId) return;
    const planetPosition = positionsRef.current[leavingId];
    if (!planetPosition) return;
    target.copy(planetPosition).multiplyScalar(0.5).add(new THREE.Vector3(0, 1.1, 0));
    camera.position.lerp(target, 0.055);
    camera.lookAt(planetPosition);
  });

  return null;
};

CameraRig.propTypes = {
  leavingId: PropTypes.string,
  positionsRef: PropTypes.object.isRequired
};

// Streams camera spherical coordinates to the HUD readout (only on change).
const Telemetry = ({ onSample }) => {
  const spherical = React.useMemo(() => new THREE.Spherical(), []);
  const last = React.useRef('');

  useFrame(({ camera }) => {
    spherical.setFromVector3(camera.position);
    const az = Math.round((THREE.MathUtils.radToDeg(spherical.theta) + 360) % 360);
    const el = Math.round(90 - THREE.MathUtils.radToDeg(spherical.phi));
    const dist = spherical.radius.toFixed(1);
    const key = az + '|' + el + '|' + dist;
    if (key !== last.current) {
      last.current = key;
      onSample({ az, el, dist });
    }
  });

  return null;
};

Telemetry.propTypes = {
  onSample: PropTypes.func.isRequired
};

const Clock = () => {
  const [now, setNow] = React.useState(() => new Date());

  React.useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = n => String(n).padStart(2, '0');

  return (
    <span>
      {pad(now.getUTCHours())}:{pad(now.getUTCMinutes())}:{pad(now.getUTCSeconds())} UTC
    </span>
  );
};

const hudText = (size, color, extra) => ({
  fontFamily: HUD.font,
  fontSize: size,
  color,
  letterSpacing: 3,
  ...extra
});

const slashTab = active => ({
  ...hudText(12, active ? HUD.goldBright : '#4A6A8A'),
  fontWeight: 700,
  padding: '9px 24px',
  background: active ? 'rgba(218, 165, 32, 0.12)' : 'rgba(10, 20, 40, 0.55)',
  borderTop: `1px solid ${active ? HUD.gold : HUD.line}`,
  clipPath: 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)',
  marginRight: -4
});

const Starmap = ({ onFallback }) => {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = React.useState(null);
  const [leavingId, setLeavingId] = React.useState(null);
  const [telemetry, setTelemetry] = React.useState({ az: 0, el: 0, dist: 0 });
  const positionsRef = React.useRef({});
  const webglOk = React.useMemo(() => {
    try {
      const canvas = document.createElement('canvas');
      return !!(canvas.getContext('webgl2') || canvas.getContext('webgl'));
    } catch (error) {
      return false;
    }
  }, []);

  React.useEffect(() => {
    if (!webglOk && onFallback) onFallback();
  }, [webglOk, onFallback]);

  React.useEffect(() => {
    document.body.style.cursor = hoveredId ? 'pointer' : '';
    return () => {
      document.body.style.cursor = '';
    };
  }, [hoveredId]);

  const handleHover = id => {
    if (leavingId) return;
    if (id && id !== hoveredId) hoverSound.play();
    setHoveredId(id);
  };

  const handleSelect = dest => {
    if (leavingId) return;
    clickSound.play();
    if (dest.external) {
      window.open(dest.to, '_blank', 'noopener');
      return;
    }
    setLeavingId(dest.id);
    setTimeout(() => navigate(dest.to), 800);
  };

  if (!webglOk) return null;

  const hoveredDest = DESTINATIONS.find(dest => dest.id === hoveredId);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 13, 14], fov: 45 }}
        gl={{ antialias: true, alpha: false, stencil: false, powerPreference: 'high-performance' }}
        onCreated={({ gl }) => gl.setClearColor('#01030A')}
      >
        <ambientLight intensity={0.35} />
        <React.Suspense fallback={null}>
          <Skybox />
        </React.Suspense>
        <Stars radius={90} depth={45} count={2500} factor={4} saturation={0} fade speed={0.5} />
        <Nebula position={[-38, 6, -42]} color='#22307A' scale={70} />
        <Nebula position={[34, -4, -48]} color='#5A2CA0' scale={62} />
        <React.Suspense fallback={null}>
          <Sun />
          {DESTINATIONS.map(dest => (
            <Planet
              key={dest.id}
              dest={dest}
              hovered={hoveredId === dest.id}
              dimmed={!!leavingId && leavingId !== dest.id}
              onHover={handleHover}
              onSelect={handleSelect}
              positionsRef={positionsRef}
            />
          ))}
        </React.Suspense>
        {DESTINATIONS.map(dest => (
          <OrbitRing
            key={'ring-' + dest.id}
            radius={dest.radius}
            active={hoveredId === dest.id}
            color={dest.color}
          />
        ))}
        <AsteroidBelt radius={9.0} count={450} />
        <CameraRig leavingId={leavingId} positionsRef={positionsRef} />
        <Telemetry onSample={setTelemetry} />
        <OrbitControls
          enabled={!leavingId}
          enablePan={false}
          minDistance={8}
          maxDistance={30}
          minPolarAngle={0.45}
          maxPolarAngle={1.2}
          autoRotate
          autoRotateSpeed={0.3}
          enableDamping
          dampingFactor={0.08}
        />
      </Canvas>

      {/* ── HUD: top bar ─────────────────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          pointerEvents: 'none'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', padding: '10px 16px 0' }}>
          <div style={slashTab(false)}>GLX</div>
          <div style={slashTab(true)}>SYS</div>
          <div style={slashTab(false)}>OBJ</div>
          <div style={{ ...hudText(12, '#7E9FBE'), padding: '10px 0 0 20px' }}>
            // NOSSULENKO-PRIME
          </div>
          <div style={{ flex: 1 }} />
          <div style={{ ...hudText(12, '#7E9FBE'), padding: '10px 130px 0 0' }}>
            <Clock />
          </div>
        </div>
        <div
          style={{
            height: 1,
            margin: '8px 0 0',
            background: `linear-gradient(90deg, transparent, ${HUD.cyan}44 15%, ${HUD.cyan}AA 50%, ${HUD.cyan}44 85%, transparent)`,
            boxShadow: `0 0 10px ${HUD.cyan}55`
          }}
        />
      </div>

      {/* ── HUD: object info panel ───────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: hoveredDest ? 24 : -90,
          transform: 'translateY(-50%)',
          width: 310,
          opacity: hoveredDest ? 1 : 0,
          transition: 'right 250ms ease, opacity 250ms ease',
          background: HUD.panelBg,
          border: `1px solid ${HUD.line}`,
          borderRight: `3px solid ${hoveredDest ? hoveredDest.color : HUD.line}`,
          clipPath: 'polygon(0 16px, 16px 0, 100% 0, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
          padding: '20px 22px',
          pointerEvents: 'none'
        }}
      >
        {hoveredDest && (
          <>
            <div style={hudText(19, HUD.goldBright, { letterSpacing: 6, fontWeight: 700 })}>
              {hoveredDest.label}
            </div>
            <div style={hudText(11, '#7E9FBE', { marginTop: 6 })}>{hoveredDest.sub}</div>
            <div
              style={{
                height: 1,
                margin: '14px 0',
                background: `linear-gradient(90deg, ${hoveredDest.color}AA, transparent)`
              }}
            />
            {hoveredDest.stats.map(([key, value]) => (
              <div key={key} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 9 }}>
                <span style={hudText(10, '#4A6A8A', { letterSpacing: 2 })}>{key}</span>
                <span style={hudText(10, '#C6DFF5', { letterSpacing: 1, textAlign: 'right' })}>
                  {value}
                </span>
              </div>
            ))}
            <div style={hudText(11, hoveredDest.color, { marginTop: 14, letterSpacing: 3 })}>
              ◈ CLICK TO ENGAGE
            </div>
          </>
        )}
      </div>

      {/* ── HUD: camera telemetry ────────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          left: 24,
          bottom: 78,
          pointerEvents: 'none',
          ...hudText(11, '#7E9FBE', { lineHeight: 2 })
        }}
      >
        <div>CAM AZ <span style={{ color: '#C6DFF5' }}>{String(telemetry.az).padStart(3, '0')}°</span></div>
        <div>CAM EL <span style={{ color: '#C6DFF5' }}>{telemetry.el}°</span></div>
        <div>RANGE <span style={{ color: '#C6DFF5' }}>{telemetry.dist} AU</span></div>
      </div>

      {/* ── HUD: bottom toolbar ──────────────────────────────── */}
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, pointerEvents: 'none' }}>
        <div
          style={{
            position: 'absolute',
            bottom: 132,
            left: '50%',
            transform: 'translateX(-50%)',
            ...hudText(11, '#7E9FBE'),
            textAlign: 'center',
            whiteSpace: 'nowrap'
          }}
        >
          DRAG TO ORBIT · SCROLL TO ZOOM · SELECT A DESTINATION
        </div>
        <div
          style={{
            height: 1,
            background: `linear-gradient(90deg, transparent, ${HUD.cyan}33 20%, ${HUD.cyan}88 50%, ${HUD.cyan}33 80%, transparent)`,
            boxShadow: `0 0 8px ${HUD.cyan}44`
          }}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px 16px 82px',
            background: 'linear-gradient(180deg, rgba(2, 6, 16, 0.85), rgba(2, 6, 16, 0.4))'
          }}
        >
          <div style={hudText(12, HUD.cyan, { letterSpacing: 5, fontWeight: 700 })}>
            ◈ NOSSULENKO <span style={{ color: '#4A6A8A' }}>//</span> STARMAP
          </div>
          <div style={{ flex: 1 }} />
          <div style={{ display: 'flex', pointerEvents: 'auto' }}>
            {DESTINATIONS.map(dest => {
              const active = hoveredId === dest.id;
              return (
                <div
                  key={'tab-' + dest.id}
                  onClick={() => handleSelect(dest)}
                  onMouseEnter={() => handleHover(dest.id)}
                  onMouseLeave={() => handleHover(null)}
                  style={{
                    ...slashTab(active),
                    cursor: 'pointer',
                    borderTop: 'none',
                    borderBottom: `1px solid ${active ? HUD.gold : HUD.line}`,
                    clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 100%, 10px 100%)'
                  }}
                >
                  {dest.label}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── HUD: scanlines + vignette ────────────────────────── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 3px)'
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: 'radial-gradient(ellipse at center, transparent 55%, rgba(1, 3, 10, 0.55) 100%)'
        }}
      />

      {/* Fade-out overlay while the camera dives into the selected planet */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: '#01030A',
          opacity: leavingId ? 1 : 0,
          transition: 'opacity 750ms ease 150ms',
          pointerEvents: leavingId ? 'auto' : 'none'
        }}
      />
    </div>
  );
};

Starmap.propTypes = {
  onFallback: PropTypes.func
};

export { Starmap };
