import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import useStore from "../store/useStore";
import AnimatedButton from "./AnimatedButton";

export default function Menu({ buttonRef }) {
  const isMenuOpen = useStore((state) => state.isMenuOpen);
  const closeMenu = useStore((state) => state.closeMenu);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef?.current &&
        !buttonRef.current.contains(e.target)
      ) {
        closeMenu();
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [closeMenu, buttonRef, isMenuOpen]);

  return (
    <div className={`menu ${isMenuOpen ? "open" : "closing"}`} ref={menuRef}>
      <div className="menu__indent"></div>

      <nav className={`menu__nav ${isMenuOpen ? "open" : ""}`}>
        <NavLink
          to="/"
          onClick={closeMenu}
          className={`menu__link ${isMenuOpen ? "open" : ""}`}
        >
          <AnimatedButton text={"Главная"} />
        </NavLink>
        <NavLink
          to="/about"
          onClick={closeMenu}
          className={`menu__link ${isMenuOpen ? "open" : ""}`}
        >
          <AnimatedButton text={"Обо мне"} />
        </NavLink>
        <NavLink
          to="/works"
          onClick={closeMenu}
          className={`menu__link ${isMenuOpen ? "open" : ""}`}
        >
          <AnimatedButton text={"Работы"} />
        </NavLink>
        <NavLink
          to="/contacts"
          onClick={closeMenu}
          className={`menu__link ${isMenuOpen ? "open" : ""}`}
        >
          <AnimatedButton text={"Контакты"} />
        </NavLink>
      </nav>

      <nav className={`menu__social ${isMenuOpen ? "open" : ""}`}>
        <a
          href="https://t.me/Mik_Shcherbakov"
          className="menu__social-icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="menu__img"
          >
            <rect width="40" height="40" fill="transparent" />
            <path
              d="M28 12.6022L24.9946 28.2923C24.9946 28.2923 24.5741 29.3801 23.4189 28.8584L16.4846 23.3526L16.4524 23.3364C17.3891 22.4654 24.6524 15.7027 24.9698 15.3961C25.4613 14.9214 25.1562 14.6387 24.5856 14.9974L13.8568 22.053L9.71764 20.6108C9.71764 20.6108 9.06626 20.3708 9.00359 19.8491C8.9401 19.3265 9.73908 19.0439 9.73908 19.0439L26.6131 12.1889C26.6131 12.1889 28 11.5579 28 12.6022Z"
              fill="#f5f5f5"
            />
          </svg>
        </a>
        <a
          href="https://wa.me/79000000000"
          className="menu__social-icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="menu__img"
          >
            <rect width="40" height="40" fill="transparent" />
            <path
              d="M20.9825 27C13.466 27 9.17864 21.7447 9 13H12.7651C12.8888 19.4184 15.6646 22.1371 17.8632 22.6977V13H21.4085V18.5355C23.5796 18.2973 25.8607 15.7748 26.6302 13H30.1755C29.8855 14.4391 29.3075 15.8017 28.4776 17.0025C27.6477 18.2033 26.5837 19.2166 25.3523 19.979C26.7269 20.6756 27.941 21.6615 28.9145 22.8717C29.888 24.082 30.5988 25.489 31 27H27.0974C26.7373 25.6876 26.0054 24.5128 24.9934 23.6228C23.9814 22.7328 22.7343 22.1673 21.4085 21.997V27H20.9825Z"
              fill="#f5f5f5"
            />
          </svg>
        </a>
        <a
          href="mailto:mik@example.com"
          className="menu__social-icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Gmail"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="menu__img"
          >
            <path d="M40 0H0V40H40V0Z" fill="transparent" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M29.7874 20.2273C29.7874 19.5182 29.7238 18.8364 29.6056 18.1818H20.1874V22.05H25.5692C25.3374 23.3 24.6328 24.3591 23.5737 25.0682V27.5773H26.8056C28.6965 25.8364 29.7874 23.2728 29.7874 20.2273Z"
              fill="#f5f5f5"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.187 30C22.887 30 25.1506 29.1045 26.8052 27.5772L23.5734 25.0681C22.6779 25.6681 21.5325 26.0227 20.187 26.0227C17.5824 26.0227 15.3779 24.2636 14.5915 21.8999H11.2506V24.4909C12.8961 27.7591 16.2779 30 20.187 30Z"
              fill="#f5f5f5"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.5919 21.9C14.3919 21.3 14.2783 20.659 14.2783 20C14.2783 19.3409 14.3919 18.6999 14.5919 18.0999V15.509H11.251C10.5737 16.859 10.1874 18.3863 10.1874 20C10.1874 21.6136 10.5737 23.1409 11.251 24.4909L14.5919 21.9Z"
              fill="#f5f5f5"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.187 13.9773C21.6552 13.9773 22.9734 14.4818 24.0097 15.4727L26.8779 12.6046C25.1461 10.9909 22.8825 10 20.187 10C16.2779 10 12.8961 12.2409 11.2506 15.5091L14.5915 18.1C15.3779 15.7364 17.5824 13.9773 20.187 13.9773Z"
              fill="#f5f5f5"
            />
          </svg>
        </a>
        <a
          href="https://github.com/MikShcherbakov"
          className="menu__social-icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="menu__img"
          >
            <path d="M40 0H0V40H40V0Z" fill="transparent" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.9694 10.24C14.4648 10.24 10 14.7048 10 20.2094C10 24.6131 12.8746 28.344 16.789 29.6895C17.2783 29.7507 17.4618 29.4449 17.4618 29.2002C17.4618 28.9556 17.4618 28.344 17.4618 27.4877C14.7095 28.0993 14.0979 26.1421 14.0979 26.1421C13.6697 24.9801 12.9969 24.6742 12.9969 24.6742C12.0795 24.0626 13.0581 24.0626 13.0581 24.0626C14.0367 24.1238 14.5872 25.1024 14.5872 25.1024C15.5046 26.6314 16.9113 26.2033 17.4618 25.9587C17.5229 25.2859 17.8287 24.8577 18.0734 24.6131C15.8716 24.3684 13.5474 23.5122 13.5474 19.659C13.5474 18.558 13.9144 17.7018 14.5872 16.9678C14.526 16.7843 14.159 15.7446 14.7095 14.399C14.7095 14.399 15.5657 14.1544 17.4618 15.4388C18.2569 15.1941 19.1131 15.133 19.9694 15.133C20.8257 15.133 21.682 15.2553 22.4771 15.4388C24.3731 14.1544 25.2294 14.399 25.2294 14.399C25.7798 15.7446 25.4128 16.7843 25.3517 17.029C25.9633 17.7018 26.3914 18.6192 26.3914 19.7201C26.3914 23.5733 24.0673 24.3684 21.8654 24.6131C22.2324 24.9189 22.5382 25.5305 22.5382 26.448C22.5382 27.7935 22.5382 28.8333 22.5382 29.2002C22.5382 29.4449 22.7217 29.7507 23.211 29.6895C27.1865 28.344 30 24.6131 30 20.2094C29.9388 14.7048 25.474 10.24 19.9694 10.24Z"
              fill="#f5f5f5"
            />
          </svg>
        </a>
      </nav>
    </div>
  );
}
