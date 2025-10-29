import React, { useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Works from "./pages/Works.jsx";
import Contacts from "./pages/Contacts.jsx";
import Menu from "./components/Menu.jsx";
import useStore from "./store/useStore.js";
import MenuButton from "./components/menuButton.jsx";
import AnimatedButton from "./components/AnimatedButton.jsx";
import { initHoverTextAnimations } from "./utils/HoverAnimation.js";
import { ReactLenis, useLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function AppContent() {
  const location = useLocation();
  const logoRef = useRef();
  const navRef = useRef();
  const wrapperMenuButtonRef = useRef();
  const buttonRef = useRef(null);
  const isMenuOpen = useStore((state) => state.isMenuOpen);
  const isMenuOpenRef = useRef(isMenuOpen);
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  useEffect(() => {
    document.fonts.ready.then(() => {
      initHoverTextAnimations();
    });

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1280px)", () => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ paused: true });

        tl.to(".header__element", {
          autoAlpha: 0,
          y: "-100%",
          duration: 0.3,
          stagger: 0.05,
          ease: "power2.in",
        })
          .fromTo(
            wrapperMenuButtonRef.current,
            {
              xPercent: 130,
              rotate: 180,
              scale: 0,
            },
            {
              xPercent: 0,
              rotate: 0,
              scale: 1,
              duration: 0.6,
              ease: "back.out(2)",
            },
            "0.3"
          )
          .to(
            ".cta-button",
            {
              scale: 1.4,
              duration: 0.2,
              ease: "power2.in",
            },
            "0.25"
          )
          .to(
            ".cta-button",
            {
              scale: 1,
              duration: 0.2,
              ease: "power2.out",
            },
            "0.45"
          );

        ScrollTrigger.create({
          trigger: document.body,
          start: "top top",
          end: "+=1",
          onEnter: () => tl.play(),
          onLeaveBack: () => {
            if (isMenuOpenRef.current) return;
            else tl.reverse();
          },
        });
      });

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  useEffect(() => {
    isMenuOpenRef.current = isMenuOpen;
  }, [isMenuOpen]);

  return (
    <>
      <ReactLenis
        root
        options={{ autoRaf: false, lerp: 0.3 }}
        ref={lenisRef}
        className="content"
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<h1>404 — Страница не найдена</h1>} />
        </Routes>
      </ReactLenis>

      <header className="header">
        <div className="header__container">
          <div ref={logoRef} className="header__logo header__element">
            <a href="/" className="animated__box">
              <span className="text">Михаил</span>
              <span className="clone">Михаил</span>
            </a>
          </div>

          <nav ref={navRef} className="header__links">
            <div className="header__element">
              <div className="header__link-container">
                <div className="animated__box-three">
                  <a href="/about" className="text">
                    Обо мне
                  </a>
                  <a href="/about" className="clone">
                    Обо мне
                  </a>
                </div>
              </div>
            </div>

            <div className="header__element">
              <div className="header__link-container">
                <div className="animated__box-three">
                  <a href="/works" className="text">
                    Работы
                  </a>
                  <a href="/works" className="clone">
                    Работы
                  </a>
                </div>
              </div>
            </div>

            <div className="header__element">
              <div className="header__link-container">
                <div className="animated__box-three">
                  <a className="text">Контакты</a>
                  <a className="clone">Контакты</a>
                </div>
              </div>
            </div>
          </nav>

          <div className="header__right">
            <div ref={wrapperMenuButtonRef} className="header__menu-button">
              <MenuButton buttonRef={buttonRef} />
            </div>
            <a
              href="https://t.me/Mik_Shcherbakov"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              <AnimatedButton text={"Cвязаться"} />
            </a>
            <Menu buttonRef={buttonRef} />
          </div>
        </div>
      </header>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
