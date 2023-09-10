"use client"
import { useEffect, useState } from "react";

export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export function useScrollY() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [scrollY, setScrollY] = useState(0);
  
    useEffect(() => {
      // only execute all the code below in client side
      // Handler to call on window resize
      function handleScroll() {
        // Set window width/height to state
        setScrollY(window.scrollY);
      }
  
      // Add event listener
      window.addEventListener("scroll", handleScroll);
  
      // Call handler right away so state gets updated with initial window size
      handleScroll();
  
      // Remove event listener on cleanup
      return () => window.removeEventListener("scroll", handleScroll);
    }, []); // Empty array ensures that effect is only run on mount
    return scrollY;
  }