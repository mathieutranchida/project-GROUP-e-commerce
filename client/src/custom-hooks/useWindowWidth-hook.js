import { useState, useEffect } from "react";

const useWindowsWidth = (size = 425) => {
    const [isMobile, setIsMobile] = useState(window.matchMedia(`(max-width: ${size}px)`).matches);
  
    let checkScreenSize = () => {
        setIsMobile( window.matchMedia(`(max-width: 425px)`).matches)
    };
    useEffect(() => {
      checkScreenSize();
      window.addEventListener("resize", checkScreenSize);
  
      return () => window.removeEventListener("resize", checkScreenSize);
    }, []);
  
    return isMobile;
  };

  export default useWindowsWidth;