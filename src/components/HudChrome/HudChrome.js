import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

// Starmap HUD palette (see Starmap.constants.js)
const HUD = {
  line: '#1E3A5F',
  cyan: '#35EFEF',
  gold: '#DAA520',
  goldBright: '#FFC94D',
  textDim: '#4A6A8A',
  text: '#7E9FBE',
  font: 'Electrolize, sans-serif'
};

const SECTIONS = [
  ['/about', 'RESUME // CAREER ARCHIVE'],
  ['/skills', 'SKILLS // CAPABILITY MATRIX'],
  ['/recommendations', 'TESTIMONIALS // SIGNAL RELAY'],
  ['/404', 'SIGNAL LOST']
];

const hudText = (size, color, extra) => ({
  fontFamily: HUD.font,
  fontSize: size,
  color,
  letterSpacing: 3,
  ...extra
});

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

const Corner = ({ position }) => (
  <div
    style={{
      position: 'absolute',
      width: 26,
      height: 26,
      borderColor: `${HUD.cyan}55`,
      borderStyle: 'solid',
      borderWidth: 0,
      ...(position === 'tl' && { top: 10, left: 10, borderTopWidth: 1, borderLeftWidth: 1 }),
      ...(position === 'tr' && { top: 10, right: 10, borderTopWidth: 1, borderRightWidth: 1 }),
      ...(position === 'bl' && { bottom: 10, left: 10, borderBottomWidth: 1, borderLeftWidth: 1 }),
      ...(position === 'br' && { bottom: 10, right: 10, borderBottomWidth: 1, borderRightWidth: 1 })
    }}
  />
);

Corner.propTypes = {
  position: PropTypes.string.isRequired
};

// Fixed, non-interactive HUD framing shared by every page: scanlines,
// vignette, corner brackets, section tag and UTC clock.
const HudChrome = ({ section }) => {
  const location = useLocation();
  const match = SECTIONS.find(([path]) => location.pathname.includes(path));
  const label = section || (match ? match[1] : 'HOME');

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 5000 }}>
      {/* Scanlines */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 3px)'
        }}
      />
      {/* Vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 60%, rgba(1, 3, 10, 0.5) 100%)'
        }}
      />

      <Corner position='tl' />
      <Corner position='tr' />
      <Corner position='bl' />
      <Corner position='br' />

      {/* Bottom gradient line */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 34,
          height: 1,
          background: `linear-gradient(90deg, transparent, ${HUD.cyan}22 20%, ${HUD.cyan}66 50%, ${HUD.cyan}22 80%, transparent)`,
          boxShadow: `0 0 8px ${HUD.cyan}33`
        }}
      />

      {/* Bottom-left section tag */}
      <div style={{ position: 'absolute', left: 22, bottom: 10, ...hudText(11, HUD.cyan, { letterSpacing: 4, fontWeight: 700 }) }}>
        ◈ NOSSULENKO <span style={{ color: HUD.textDim }}>//</span> {label}
      </div>

      {/* Bottom-right clock */}
      <div style={{ position: 'absolute', right: 22, bottom: 10, ...hudText(11, HUD.text) }}>
        <Clock />
      </div>
    </div>
  );
};

HudChrome.propTypes = {
  section: PropTypes.string
};

export { HudChrome };
