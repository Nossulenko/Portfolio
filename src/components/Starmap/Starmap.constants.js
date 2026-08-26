// Navigation destinations rendered as planets orbiting the central star.
// radius = orbit distance, size = planet radius, speed = orbit rad/s, phase = start angle.
// Textures: Solar System Scope (CC BY 4.0) — see public/humans.txt for attribution.
const DESTINATIONS = [
  {
    id: 'resume',
    label: 'RESUME',
    sub: 'PROFILE // EXPERIENCE',
    to: '/about',
    color: '#DAA520',
    texture: '/textures/planets/2k_venus_atmosphere.jpg',
    tilt: 0.05,
    spin: 0.06,
    radius: 5.5,
    size: 0.88,
    speed: 0.14,
    phase: 0.6,
    stats: [
      ['TYPE', 'CLOUDED TERRESTRIAL'],
      ['DESIGNATION', 'NN-01 · CAREER ARCHIVE'],
      ['ORBIT', '5.5 AU · INNER SYSTEM'],
      ['STATUS', 'DECADE+ LOGGED']
    ]
  },
  {
    id: 'skills',
    label: 'SKILLS',
    sub: 'AI & ML ENGINEERING',
    to: '/skills',
    color: '#35EFEF',
    texture: '/textures/planets/2k_uranus.jpg',
    tilt: 1.43,
    spin: 0.12,
    radius: 7.8,
    size: 0.75,
    speed: 0.1,
    phase: 2.4,
    stats: [
      ['TYPE', 'ICE GIANT · EXTREME TILT'],
      ['DESIGNATION', 'NN-02 · CAPABILITY MATRIX'],
      ['ORBIT', '7.8 AU · MID SYSTEM'],
      ['STATUS', 'AGENTIC SYSTEMS ONLINE']
    ]
  },
  {
    id: 'testimonials',
    label: 'TESTIMONIALS',
    sub: 'INCOMING TRANSMISSIONS',
    to: '/recommendations',
    color: '#9D6EFF',
    texture: '/textures/planets/2k_neptune.jpg',
    tilt: 0.49,
    spin: 0.1,
    ring: true,
    radius: 10.1,
    size: 0.8,
    speed: 0.075,
    phase: 4.2,
    stats: [
      ['TYPE', 'RINGED GIANT'],
      ['DESIGNATION', 'NN-03 · SIGNAL RELAY'],
      ['ORBIT', '10.1 AU · OUTER SYSTEM'],
      ['STATUS', 'TRANSMISSIONS INCOMING']
    ]
  },
  {
    id: 'connect',
    label: 'CONNECT',
    sub: 'LINKEDIN UPLINK',
    to: 'https://www.linkedin.com/in/nikolai-nossulenko',
    external: true,
    color: '#3366FF',
    texture: '/textures/planets/2k_earth_daymap.jpg',
    clouds: '/textures/planets/2k_earth_clouds.jpg',
    tilt: 0.41,
    spin: 0.18,
    radius: 12.4,
    size: 0.7,
    speed: 0.055,
    phase: 5.4,
    stats: [
      ['TYPE', 'OCEAN WORLD · INHABITED'],
      ['DESIGNATION', 'NN-04 · UPLINK NODE'],
      ['ORBIT', '12.4 AU · FRONTIER'],
      ['STATUS', 'CHANNEL OPEN · LINKEDIN']
    ]
  }
];

const HUD = {
  idle: '#5A7A9A',
  idleDim: '#33506E',
  line: '#1E3A5F',
  cyan: '#35EFEF',
  gold: '#DAA520',
  goldBright: '#FFC94D',
  panelBg: 'rgba(2, 6, 16, 0.82)',
  font: 'Electrolize, sans-serif'
};

export { DESTINATIONS, HUD };
