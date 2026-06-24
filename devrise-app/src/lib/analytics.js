import ReactGA from 'react-ga4';

// Initialize Google Analytics
// IMPORTANT: Replace "G-XXXXXXXXXX" with your actual Google Analytics Measurement ID
export const initGA = () => {
  const measurementId = "G-3PV15W3W2E"; 
  if (measurementId && measurementId !== "G-XXXXXXXXXX") {
    ReactGA.initialize(measurementId);
  }
};

// Log a page view with the current path
export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
};

// Log a custom event
export const logEvent = (category, action, label) => {
  ReactGA.event({
    category,
    action,
    label
  });
};
