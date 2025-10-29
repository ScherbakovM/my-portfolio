import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import HelpBlockLogo from "./HelpBlockLogo";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const helpCases = [
  {
    text: "Нужен новый класнный сайт",
    icon: "👩🏽",
    username: "Анна",
  },
  {
    text: "Сайт работает медленно или с ошибками",
    icon: "👨🏻",
    username: "Марк",
  },
  {
    text: "Нужно что-то добавить на сайт",
    icon: "👱",
    username: "Александр",
  },
  {
    text: "Нужна любая другая помощь",
    icon: "👩",
    username: "Лина",
  },
];

const HelpBlock = () => {
  const containerRef = useRef(null);
  const messagesRef = useRef([]);
  const messageLogoRef = useRef();
  const inputRef = useRef();
  const footerRef = useRef();
  const linkRef = useRef();

  const inputText =
    "Не беспокойтесь, просто свяжитесь со мной и мы решим ваши ворпосы — ";

  useGSAP(() => {
    if (containerRef.current) {
      gsap.fromTo(
        messagesRef.current,
        {
          y: -700,
          transformOrigin: "center",
        },
        {
          y: 0,
          stagger: { amount: 0.6, from: "start" },
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top-=5% bottom",
            end: "bottom+=5% bottom",
            toggleActions: "play none none reverse",
            scrub: true,
          },
        }
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      const chars = inputText.split("");
      tl.fromTo(
        inputRef.current,
        { text: "" },
        {
          text: inputText,
          duration: chars.length * 0.1,
          ease: "none",
        }
      );

      tl.fromTo(linkRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
    }
  }, {});

  return (
    <>
      <div className="help">
        <HelpBlockLogo />
        <section className="help__content" ref={containerRef}>
          <div className="help__tab-header">
            <div className="help__tab-name-wrapper">
              <div ref={messageLogoRef} className="help__tab-name">
                Сообщения
              </div>
            </div>
            <div className="help__message-icon-wrapper">
              <svg
                className="help__message-icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#1f1f1f"
              >
                <path d="M172.31-180Q142-180 121-201q-21-21-21-51.31v-455.38Q100-738 121-759q21-21 51.31-21h615.38Q818-780 839-759q21 21 21 51.31v455.38Q860-222 839-201q-21 21-51.31 21H172.31ZM480-457.69 160-662.31v410q0 5.39 3.46 8.85t8.85 3.46h615.38q5.39 0 8.85-3.46t3.46-8.85v-410L480-457.69Zm0-62.31 313.85-200h-627.7L480-520ZM160-662.31V-720v467.69q0 5.39 3.46 8.85t8.85 3.46H160v-422.31Z" />
              </svg>
            </div>
          </div>
          <div className="help__cases">
            {helpCases.map((item, i) => (
              <div
                key={i}
                className="help__case"
                ref={(el) => (messagesRef.current[i] = el)}
                style={{ zIndex: i }}
              >
                <div className="help__case-content">
                  <div className="help__case-avatar">{item.icon}</div>
                  <div className="help__case-message">
                    <div className="help__case-username">{item.username}</div>
                    <div className="help__case-text">{item.text}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div ref={footerRef} className="help__tab-footer">
            <div className="help__input-wrapper">
              <div ref={inputRef} className="help__input"></div>{" "}
              <div ref={linkRef} className="help__link-wrapper">
                <a className="help__link" href="/about">
                  контакты
                </a>
              </div>
            </div>

            <div className="help__buttons">
              <div className="help__send-icon-wrapper">
                <svg
                  className="help__message-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#1f1f1f"
                >
                  <path d="M706.92-334.23q0 97.44-67.81 165.83-67.8 68.4-165.07 68.4t-165.27-68.4q-68-68.39-68-165.83v-359.62q0-69.23 48.08-117.69Q336.92-860 406.15-860q69.23 0 117.31 48.46t48.08 117.69v340.39q0 40.61-28.29 69.34-28.3 28.73-68.96 28.73-40.67 0-69.4-28.53-28.73-28.53-28.73-69.54v-351.15h59.99v351.15q0 16.08 10.81 27.08t26.89 11q16.07 0 26.88-11 10.81-11 10.81-27.08v-340.77q-.62-44.31-30.78-75.04Q450.6-800 406.15-800q-44.26 0-74.82 30.92-30.56 30.93-30.56 75.23v359.62q-.62 72.54 50.15 123.38Q401.69-160 474.18-160q71.46 0 121.49-50.85 50.02-50.84 51.25-123.38v-370.38h60v370.38Z" />
                </svg>
              </div>

              <div className="help__send-icon-wrapper">
                <svg
                  className="help__message-icon help__message-icon--send"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#1f1f1f"
                >
                  <path d="M140-190v-580l688.46 290L140-190Zm60-90 474-200-474-200v147.69L416.92-480 200-427.69V-280Zm0 0v-400 400Z" />
                </svg>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HelpBlock;
