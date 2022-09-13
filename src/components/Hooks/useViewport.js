import { useEffect, useState } from "react";
// để reponsive giống như trong searchMovies.js 
export const useViewport = () => {
  const [windowWidth, setWindowWidth] = useState(
    window.innerWidth || document.documentElement.clientWidth
  );
  useEffect(() => {
    const handleWindowWidth = () => {
      const width = window.innerWidth || document.documentElement.clientWidth;
      setWindowWidth(width);
      };
      handleWindowWidth();
      window.addEventListener('resize', handleWindowWidth);
      return () => {
          window.removeEventListener("resize", handleWindowWidth);
      }
  }, []);
    return [windowWidth]
};
