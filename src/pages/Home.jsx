import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Physics2DPlugin } from "gsap/Physics2DPlugin";
import AboutPreview from "../components/AboutPreview";
import Services from "../components/Services";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/all";
import { Draggable } from "gsap/Draggable";
import Contacts from "./Contacts";
import HelpBlock from "../components/HelpBlock";

gsap.registerPlugin(
  MotionPathPlugin,
  Physics2DPlugin,
  useGSAP,
  ScrollTrigger,
  Draggable
);

export default function Home() {
  const homeRef = useRef(null);
  const htmlIconRef = useRef(null);
  const htmlIconTrackRef = useRef(null);
  const cssIconRef = useRef(null);
  const cssIconTrackRef = useRef(null);
  const jsIconRef = useRef(null);
  const jsIconTrackRef = useRef(null);
  const codeIconRef = useRef(null);
  const codeIconTrackRef = useRef(null);
  const aboutPreviewRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    const icons = [
      { iconRef: cssIconRef, trackRef: cssIconTrackRef },
      { iconRef: htmlIconRef, trackRef: htmlIconTrackRef },
      { iconRef: jsIconRef, trackRef: jsIconTrackRef },
      { iconRef: codeIconRef, trackRef: codeIconTrackRef },
    ];

    // Вычисляем начальное положение по высоте трека
    icons.forEach(({ iconRef, trackRef }) => {
      const iconEl = iconRef.current;
      const trackEl = trackRef.current;

      if (iconEl && trackEl) {
        const offset = trackEl.offsetHeight - iconEl.offsetHeight;
        gsap.set(iconEl, { y: offset });
      }
    });

    gsap.to(
      icons.map(({ iconRef }) => iconRef.current),
      {
        y: 0,
        duration: 1,
        ease: "circ.out",
        stagger: {
          amount: 0.6,
          from: "end",
        },
        onComplete: () => {
          icons.forEach(({ iconRef, trackRef }) => {
            Draggable.create(iconRef.current, {
              type: "y",
              bounds: trackRef.current,
              inertia: true,
              onClick: function () {
                console.log(`${iconRef.current.innerText} clicked`);
              },
              onDragEnd: function () {
                console.log(`${iconRef.current.innerText} drag ended`);
                gsap.to(iconRef.current, {
                  y: 0,
                  duration: 0.4,
                  ease: "power4.out",
                });
              },
            });
          });
        },
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <div ref={homeRef} className="home">
      <div className="starter-page">
        <div className="starter-page__wrapper">
          <h2 className="starter-page__logo">
            <span className="starter-page__logo-part">Создаю креативные</span>
            <span className="starter-page__logo-part highlight">
              функциональные сайты
            </span>
          </h2>
          <h3 className="starter-page__description">
            <div className="starter-page__description-wrapper">
              <span>
                Помогаю клиентам выделяться и достигать
                <br />
                своих целей в интернете.
              </span>
            </div>
          </h3>

          <div className="starter-page__icons-pannel" ref={containerRef}>
            <div className="starter-page__icons">
              <div ref={cssIconTrackRef} className="icon-track">
                <div ref={cssIconRef} className="icon css-icon">
                  css
                </div>
              </div>
              <div ref={htmlIconTrackRef} className="icon-track">
                <div ref={htmlIconRef} className="icon html-icon">
                  html
                </div>
              </div>
              <div ref={jsIconTrackRef} className="icon-track">
                <div ref={jsIconRef} className="icon js-icon">
                  js
                </div>
              </div>
              <div ref={codeIconTrackRef} className="icon-track">
                <div ref={codeIconRef} className="icon code-icon">
                  {"</>"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutPreview ref={aboutPreviewRef} />
      <Services />
      <HelpBlock />
      <Contacts />
    </div>
  );
}
