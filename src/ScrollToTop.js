import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top when the location changes
    window.scrollTo(0, 0);
  }, [location]);

  return null; // This component doesn't render anything, it just handles scrolling
};

export default ScrollToTop;
