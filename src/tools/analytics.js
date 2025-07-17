// Google Analytics utility functions
export const trackPageView = (pageTitle, pagePath) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-JNZCEG91VV', {
      page_title: pageTitle,
      page_location: window.location.href,
      page_path: pagePath
    });
  }
};

export const trackEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};

// Track specific events for your portfolio
export const trackDownloadResume = (userData) => {
  trackEvent('download_resume', 'engagement', 'resume_download', 1);

  // Track user data if provided
  if (userData) {
    trackEvent('form_submission', 'engagement', 'resume_form', 1);
  }
};

export const trackSocialLink = (platform) => {
  trackEvent('click_social_link', 'engagement', platform, 1);
};

export const trackNavigation = (page) => {
  trackEvent('page_navigation', 'engagement', page, 1);
};

export const trackContact = (method) => {
  trackEvent('contact_attempt', 'engagement', method, 1);
};

// Initialize analytics when the app loads
export const initializeAnalytics = () => {
  if (typeof window !== 'undefined') {
    // Track initial page view
    trackPageView(document.title, window.location.pathname);

    // Track route changes
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function (...args) {
      originalPushState.apply(history, args);
      trackPageView(document.title, window.location.pathname);
    };

    history.replaceState = function (...args) {
      originalReplaceState.apply(history, args);
      trackPageView(document.title, window.location.pathname);
    };
  }
};
