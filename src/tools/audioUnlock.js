// Audio unlock utility for Howler.js
export const unlockAudio = () => {
  // Check if Howler is available
  if (typeof window !== 'undefined' && window.Howler) {
    // Try to unlock audio using Howler's built-in unlock method
    if (window.Howler._unlockAudio) {
      window.Howler._unlockAudio();
    }

    // Also try to resume the audio context
    if (window.Howler.ctx && window.Howler.ctx.resume) {
      window.Howler.ctx.resume();
    }
  }

  // Fallback: Create a silent audio context
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const buffer = audioContext.createBuffer(1, 1, 22050);
    const source = audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(audioContext.destination);

    // Play the silent buffer to unlock audio
    if (source.start) {
      source.start(0);
    } else if (source.noteOn) {
      source.noteOn(0);
    }

    // Resume the audio context
    if (audioContext.resume) {
      audioContext.resume();
    }

    // Clean up
    setTimeout(() => {
      audioContext.close();
    }, 1000);
  } catch (error) {
    console.log('Audio unlock failed:', error);
  }
};

// Setup audio unlock on user interactions
export const setupAudioUnlock = () => {
  if (typeof window === 'undefined') return;

  const events = ['click', 'touchstart', 'touchend', 'keydown', 'mousedown'];

  const unlockHandler = () => {
    unlockAudio();
    // Remove listeners after first successful unlock
    events.forEach(event => {
      document.removeEventListener(event, unlockHandler, { passive: true });
    });
  };

  events.forEach(event => {
    document.addEventListener(event, unlockHandler, { passive: true });
  });

  // Also try to unlock immediately
  setTimeout(unlockAudio, 100);
};
