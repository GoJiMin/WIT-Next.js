import { useCallback, useEffect, useRef, useState } from "react";

export function useSideBar<T extends HTMLElement>() {
  const [sideBarVisibility, setSideBarVisibility] = useState(false);
  const sideBarRef = useRef<T | null>(null);

  const toggleVisibility = () => {
    setSideBarVisibility((prev) => !prev);
  };

  const handleClickOutSide = useCallback((e: MouseEvent) => {
    if (sideBarRef.current && !sideBarRef.current.contains(e.target as Node)) {
      setSideBarVisibility(false);
    }
  }, []);

  useEffect(() => {
    if (sideBarVisibility) {
      document.addEventListener("mousedown", handleClickOutSide);
    } else {
      document.addEventListener("mousedown", handleClickOutSide);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [sideBarVisibility, handleClickOutSide]);

  return { sideBarRef, sideBarVisibility, toggleVisibility };
}
