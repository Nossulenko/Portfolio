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

// Mobile-specific audio unlock
export const unlockMobileAudio = () => {
  if (typeof window === 'undefined') return;

  // Create a silent audio element for mobile
  try {
    const audio = new Audio();
    audio.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=';
    audio.volume = 0;
    audio.play().catch(() => {
      // Ignore errors, this is expected on some mobile browsers
    });
  } catch (error) {
    console.log('Mobile audio unlock failed:', error);
  }
};

// Setup audio unlock on user interactions
export const setupAudioUnlock = () => {
  if (typeof window === 'undefined') return;

  // More comprehensive list of events for mobile
  const events = [
    'click',
    'touchstart',
    'touchend',
    'touchmove',
    'keydown',
    'mousedown',
    'mouseup',
    'scroll',
    'focus',
    'blur'
  ];

  let unlocked = false;

  const unlockHandler = () => {
    if (unlocked) return;

    unlockAudio();
    unlockMobileAudio();
    unlocked = true;

    // Remove listeners after first successful unlock
    events.forEach(event => {
      document.removeEventListener(event, unlockHandler, { passive: true });
    });

    // Also remove from window and body
    window.removeEventListener('focus', unlockHandler);
    window.removeEventListener('blur', unlockHandler);
  };

  // Add listeners to document
  events.forEach(event => {
    document.addEventListener(event, unlockHandler, { passive: true });
  });

  // Add listeners to window for focus events
  window.addEventListener('focus', unlockHandler);
  window.addEventListener('blur', unlockHandler);

  // Also try to unlock immediately
  setTimeout(() => {
    if (!unlocked) {
      unlockAudio();
      unlockMobileAudio();
    }
  }, 100);

  // Try again after a longer delay
  setTimeout(() => {
    if (!unlocked) {
      unlockAudio();
      unlockMobileAudio();
    }
  }, 1000);
};
