import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import AnimatedButton from "./AnimatedButton";
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const Services = () => {
  const serv = [
    {
      logo: "Проектирование",
      description: [
        "Определение структуры сайта",
        "Проектирование сценариев",
        "Создание прототипов",
        "Продумывание обновлений",
        "Выбор подходящих технологий",
      ],
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20px"
          viewBox="0 -960 960 960"
          width="20px"
          fill="#466afd"
        >
          <path d="M144-144v-480h192v-192h480v672H144Zm480-72h120v-528H408v120h216v408Zm-216 0h144v-336H408v336Zm-192 0h120v-336H216v336Zm408-408v72-72Zm-288 72Zm216 0Zm72-72Z" />
        </svg>
      ),
    },
    {
      logo: "Фронтенд",
      description: [
        "Верстка адаптивных интерфейсов",
        "Интерактивные элементы и анимация",
        "Оптимизация под все устройства",
        "Интеграция с бэкендом по API",
        "Настройка скорости загрузки",
      ],
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20px"
          viewBox="0 -960 960 960"
          width="20px"
          fill="#466afd"
        >
          <path d="M480-96q-79 0-149-30t-122.5-82.5Q156-261 126-331T96-480q0-80 30-149.5t82.5-122Q261-804 331-834t149-30q80 0 149.5 30t122 82.5Q804-699 834-629.5T864-480q0 79-30 149t-82.5 122.5Q699-156 629.5-126T480-96Zm0-75q17-17 34-63.5T540-336H420q9 55 26 101.5t34 63.5Zm-91-10q-14-30-24.5-69T347-336H204q29 57 77 97.5T389-181Zm182 0q60-17 108-57.5t77-97.5H613q-7 47-17.5 86T571-181ZM177-408h161q-2-19-2.5-37.5T335-482q0-18 .5-35.5T338-552H177q-5 19-7 36.5t-2 35.5q0 18 2 35.5t7 36.5Zm234 0h138q2-20 2.5-37.5t.5-34.5q0-17-.5-35t-2.5-37H411q-2 19-2.5 37t-.5 35q0 17 .5 35t2.5 37Zm211 0h161q5-19 7-36.5t2-35.5q0-18-2-36t-7-36H622q2 19 2.5 37.5t.5 36.5q0 18-.5 35.5T622-408Zm-9-216h143q-29-57-77-97.5T571-779q14 30 24.5 69t17.5 86Zm-193 0h120q-9-55-26-101.5T480-789q-17 17-34 63.5T420-624Zm-216 0h143q7-47 17.5-86t24.5-69q-60 17-108 57.5T204-624Z" />
        </svg>
      ),
    },
    {
      logo: "Бэкенд",
      description: [
        "Реализация серверной логики",
        "Настройка базы данных",
        "Создание и подключение API",
        "Организация авторизации и доступа",
        "Интеграция сторонних сервисов",
      ],
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20px"
          viewBox="0 -960 960 960"
          width="20px"
          fill="#466afd"
        >
          <path d="M479.5-144q-140.5 0-238-41.85T144-288v-384q0-60 98-102t237.5-42q139.5 0 238 42T816-672v384q0 60.3-98 102.15Q620-144 479.5-144Zm.47-456Q566-600 646-621.5t98-50.5q-18-28-98.5-50t-165.53-22Q394-744 313.5-722T216-672q17 29 96.5 50.5T479.97-600Zm.03 192q42 0 80-4.5t71.5-12.5q33.5-8 62-20.5T744-474v-109q-24.25 13.22-53.62 23.61Q661-549 627.17-542.15q-33.83 6.85-71 10.5Q519-528 479.5-528t-77.11-3.65q-37.62-3.65-71-10.5Q298-549 268.5-559.5 239-570 216-583v109q22.41 15.94 50.21 28.47Q294-433 327.5-425q33.5 8 72 12.5T480-408Zm.32 192q43.32 0 88.05-6.4 44.73-6.39 82.4-16.9 37.67-10.5 63.09-23.75Q739.29-276.3 744-290v-101q-24.25 13.22-53.62 23.61Q661-357 627.17-350.15q-33.83 6.85-71 10.5Q519-336 479.5-336t-77.11-3.65q-37.62-3.65-71-10.5Q298-357 268.5-367.5 239-378 216-391v103q5 13 30.5 26t63 23q37.5 10 82.5 16.5t88.32 6.5Z" />
        </svg>
      ),
    },
    {
      logo: "Деплой и запуск",
      description: [
        "Настройка хостинга или облака",
        "Подключение домена и сертификатов",
        "Организация CI/CD процессов",
        "Перенос данных на продакшн",
        "Финальное тестирование системы",
      ],
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20px"
          viewBox="0 -960 960 960"
          width="20px"
          fill="#466afd"
        >
          <path d="m429-314 204-204-51-51-153 153-68-68-51 51 119 119ZM240-192q-80 0-136-56T48-384q0-76 52-131.5T227-576q23-85 92.5-138.5T480-768q103 0 179 69.5T744-528q70 0 119 49t49 119q0 70-49 119t-119 49H240Zm0-72h504q40 0 68-28t28-68q0-40-28-68t-68-28h-66l-6-65q-7-74-62-124.5T480-696q-64 0-114.5 38.5T297-556l-14 49-51 3q-48 3-80 37.5T120-384q0 50 35 85t85 35Zm240-216Z" />
        </svg>
      ),
    },
    {
      logo: "Тестирование",
      description: [
        "Проверка функциональных сценариев",
        "Кроссбраузерное тестирование",
        "Оценка адаптивности и доступности",
        "Нагрузочное тестирование проекта",
        "Исправление найденных ошибок",
      ],
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20px"
          viewBox="0 -960 960 960"
          width="20px"
          fill="#466afd"
        >
          <path d="M68-516 0-584q97-94 221-143.5T480-777q26 0 51 2.5t50 6.5l-45 90q-14-2-28-2.5t-28-.5q-115 0-221.5 42.5T68-516Zm170 169-68-68q61-57 137.5-88T468-536l-48 101q-51 9-97.5 31T238-347Zm218 190q-30-11-44-38.5t0-54.5l232-484q3-7 10-9.5t15-.5q8 3 11.5 9.5T682-720L548-201q-8 29-35.5 42t-56.5 2Zm266-191q-12-11-24-20t-26-17l24-97q26 14 49.5 30.5T791-415l-69 67Zm170-168q-36-34-75.5-62T732-626l22-95q58 24 109.5 59t96.5 78l-68 68Z" />
        </svg>
      ),
    },
    {
      logo: "Поддержка",
      description: [
        "Мониторинг стабильности работы",
        "Регулярные обновления и исправления",
        "Добавление нового функционала",
        "Оптимизация скорости и SEO",
        "Учет отзывов и аналитики",
      ],
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20px"
          viewBox="0 -960 960 960"
          width="20px"
          fill="#466afd"
        >
          <path d="M480-72v-72h264v-48H576v-288h168v-48q0-112-77.24-188-77.23-76-186.5-76Q371-792 293.5-716 216-640 216-528v48h168v288H216q-29-2-50.5-22T144-264v-263.84q0-69.72 26.5-131.44T243-766.5Q289-812 350.04-838q61.04-26 130-26 68.96 0 130.46 26 61.5 26 107 71.5t72 107.17Q816-597.67 816-528v384q0 29-21.15 50.5T744-72H480ZM216-264h96v-144h-96v144Zm432 0h96v-144h-96v144ZM216-408h96-96Zm432 0h96-96Z" />
        </svg>
      ),
    },
  ];

  useGSAP(() => {
    const mm = gsap.matchMedia();
    const triggers = [];

    mm.add(
      {
        isLarge: "(min-width: 1600px)",
        isSmall: "(max-width: 1599px)",
      },
      (context) => {
        const { isLarge, isSmall } = context.conditions;

        // Анимация заголовка
        const tlLogo = gsap.timeline();
        tlLogo.fromTo(
          ".services__title-span",
          { y: "200%", rotate: 8 },
          {
            y: 0,
            rotate: 0,
            stagger: { amount: 0.2, from: "end" },
            duration: 0.6,
            ease: "back.out(3)",
          }
        );

        const tlCard = gsap.timeline();

        tlCard.fromTo(
          ".services__card",
          { y: 80 },
          {
            y: 0,
            duration: isLarge ? 0.4 : 0.4,
            ease: "back.out(3)",
            stagger: 0.1,
          }
        );

        const triggerOne = ScrollTrigger.create({
          trigger: ".services__title",
          start: "center bottom",
          end: "bottom center",
          toggleActions: "play none none reverse",
          animation: tlLogo,
        });
        triggers.push(triggerOne);

        const trigger = ScrollTrigger.create({
          trigger: ".services__wrapper",
          start: "top bottom",
          end: "top center",
          toggleActions: "play none none reverse",
          animation: tlCard,
        });
        triggers.push(trigger);
      }
    );

    return () => {
      mm.revert();
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="services">
      <div className="services__horizontal-indent"></div>

      <div className="services__title">
        <div className="services__title-text">
          <span className="services__title-span">Чем</span>
        </div>

        <div className="services__title-text">
          <span className="services__title-span">я</span>
        </div>
        <div className="services__title-text">
          <span className="services__title-span">занимаюсь</span>
        </div>
      </div>

      <div className="services__wrapper">
        {serv.map((service, i) => (
          <div className="services__card" key={i}>
            <div className="services__icon-wrapper">{service.image}</div>
            <div className="services__logo">{service.logo}</div>
            <ul className="services__description">
              {service.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="services__horizontal-indent"></div>
    </div>
  );
};

export default Services;
