// utils/GlobalTracker.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackVisitor, trackEvent } from "./trackVisitors";

const GlobalTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Skip tracking for admin pages
    if (location.pathname.startsWith("/data") || location.pathname === "/admin") {
      return;
    }

    // Track page view
    trackVisitor(location.pathname);
    
    // Optional: Track referrer on first page load
    if (window.performance) {
      const navigationEntry = performance.getEntriesByType('navigation')[0];
    //   if (navigationEntry && navigationEntry.type === 'navigate') {
    //     // This is a new page load, not a client-side navigation
    //     const referrer = document.referrer;
    //     if (referrer && !referrer.includes(window.location.hostname)) {
    //       // Track external referrer
    //       trackEvent('external_referrer', { referrer });
    //     }
    //   }
    }
  }, [location.pathname]);

  // Track time spent on page
  useEffect(() => {
    const startTime = Date.now();
    
    return () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000); // in seconds
    //   if (timeSpent > 5) { // Only track if more than 5 seconds
    //     trackEvent('page_exit', {
    //       page: location.pathname,
    //       timeSpent,
    //     });
    //   }
    };
  }, [location.pathname]);

  return null;
};

export default GlobalTracker;