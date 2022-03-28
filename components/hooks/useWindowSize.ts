import { useEffect, useState } from "react";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.screen.availHeight]);
    }
    window.addEventListener("resize", updateSize);
    window.addEventListener("orientationchange", updateSize);
    updateSize();
    return () => {
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("orientationchange", updateSize);
    };
  }, []);
  return size;
}

export default useWindowSize;
