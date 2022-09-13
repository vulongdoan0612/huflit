import { useEffect, useState } from "react";
// Function để ẩn hiện navbar khi scroll
function useScrollY() {
    const [scrollY, setScrollY] = useState(0)
    const handleScrollY = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    setScrollY(scrollY)
  }
  useEffect(() => {
    handleScrollY();
    window.addEventListener("scroll", handleScrollY);
    return () => {
          window.removeEventListener("scroll", handleScrollY);

    }
  }, []);
    return([scrollY])
}

export default useScrollY;