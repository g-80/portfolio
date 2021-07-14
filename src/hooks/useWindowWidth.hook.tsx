import { useState, useEffect } from "react";

// A hook to create responsive app that will be used to conditionally render elements

export default function useWindowWidth(width: number) {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const breakingWidth = width;
  return windowWidth < breakingWidth;
}
