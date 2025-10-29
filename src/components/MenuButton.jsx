import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import useStore from "../store/useStore";

export default function MenuButton({ buttonRef }) {
  const localRef = useRef(null);
  const isMenuOpen = useStore((state) => state.isMenuOpen);
  const toggleMenu = useStore((state) => state.toggleMenu);

  useEffect(() => {
    if (buttonRef) buttonRef.current = localRef.current;
  }, [buttonRef]);

  useEffect(() => {}, [isMenuOpen]);

  return (
    <div ref={localRef} className="menu-button" onClick={toggleMenu}>
      <div
        className={
          isMenuOpen ? "menu-button__face active" : "menu-button__face"
        }
      >
        <span className="menu-button__line"></span>
        <span className="menu-button__line"></span>
        <span className="menu-button__line"></span>
      </div>
    </div>
  );
}
