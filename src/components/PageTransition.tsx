import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsTransitioning(true);

    // Reset transition state after a short delay
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div
      className={`transition-all duration-300 ease-in-out ${
        isTransitioning
          ? "opacity-0 transform translate-y-4"
          : "opacity-100 transform translate-y-0"
      }`}
    >
      {children}
    </div>
  );
};

export default PageTransition;
