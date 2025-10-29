import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import AnimatedButton from "./AnimatedButton";
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export default function AboutPreview() {
  const aboutPreviewTitleRef = useRef();
  const aboutBtnRef = useRef();

  useGSAP(() => {
    const triggers = [];

    const animate = () => {
      triggers.forEach((t) => t.kill());
      triggers.length = 0;

      const timeline = gsap.timeline();

      timeline

        .fromTo(
          ".about-preview__title-span",
          { y: "200%", rotate: 8 },
          {
            y: 0,
            rotate: 0,
            stagger: { amount: 0.2, from: "end" },
            duration: 0.6,
            ease: "back.out(3)",
          }
        )
        .fromTo(
          ".about-preview__description-p",
          { y: "100%" },
          {
            y: 0,
            stagger: { amount: 0.1, from: "start" },
            duration: 0.6,
            ease: "back.out(1)",
          },
          "0.4"
        );

      const triggerOne = ScrollTrigger.create({
        trigger: ".about-preview__title",
        start: "center bottom",
        endTrigger: ".about-preview",
        end: "bottom center",
        toggleActions: "play none none reverse",
        animation: timeline,
      });

      const triggerTwo = ScrollTrigger.create({
        trigger: ".about-preview__description-button",
        start: "center bottom",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
        animation: gsap.fromTo(
          aboutBtnRef.current,
          { scale: 0 },
          {
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.1)",
          }
        ),
      });

      triggers.push(triggerOne);
      triggers.push(triggerTwo);
    };

    animate();

    const handleResize = () => {
      animate();
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="about-preview">
      <div className="about-preview__horizontal-indent"></div>

      <div className="about-preview__wrapper">
        <div ref={aboutPreviewTitleRef} className="about-preview__title">
          <div className="about-preview__title-text">
            <span className="about-preview__title-span">Обо</span>
          </div>

          <div className="about-preview__title-text">
            <span className="about-preview__title-span">мне</span>
          </div>
        </div>

        <div className="about-preview__description">
          <div className="about-preview__description-text">
            <div className="about-preview__description-block">
              <p className="about-preview__description-p">
                Рад вашему визиту. Меня зовут Михаил, я занимаюсь
                веб-разработкой.
              </p>
            </div>

            <div className="about-preview__description-block">
              <p className="about-preview__description-p">
                Этот сайт — моё портфолио. Здесь вы найдёте проекты, над
                которыми я работал, и сможете узнать больше обо мне. Сейчас я
                открыт для сотрудничества и нахожусь в поиске интересных задач,
                которые помогут развиваться и вдохновят на новые идеи. Если вы
                хотите воплотить свой проект в жизнь — буду рад помочь!
              </p>
            </div>

            <div className="about-preview__description-block">
              <span className="about-preview__description-p">
                Также, если вашему сайту требуется доработка, добавление новых
                функций или исправление ошибок, обращайтесь — помогу реализовать
                задуманное.
              </span>
            </div>
          </div>
        </div>
      </div>

      <a className="about-preview__description-button" href="/about">
        <AnimatedButton text="🡥 Больше информации" ref={aboutBtnRef} />
      </a>
    </div>
  );
}
