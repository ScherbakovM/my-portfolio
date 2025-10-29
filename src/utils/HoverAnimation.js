import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

// Регистрируем плагин SplitText
gsap.registerPlugin(SplitText);

/**
 * Оборачивает все пробелы в span.char.space, чтобы SplitText их корректно разделял.
 * @param {HTMLElement} el - элемент, внутри которого нужно обработать пробелы
 */
function preserveSpaces(el) {
    el.innerHTML = el.textContent.replace(/ /g, '<span class="char space"> </span>');
}

/**
 * Инициализирует анимацию текста при наведении на блоки.
 * Работает с блоками: .animated__box, .animated__box-two, .animated__box-three, .animated__button.
 * Требуется, чтобы внутри блока были элементы с классами .text и .clone (одинаковый текст).
 *
 * @param {HTMLElement|Document} container - Контейнер, внутри которого искать анимируемые блоки.
 */
export function initHoverTextAnimations(container = document) {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
        const boxes = container.querySelectorAll(
            ".animated__box, .animated__box-two, .animated__box-three, .animated__button"
        );

        boxes.forEach((box) => {
            // Удаляем предыдущие обработчики и SplitText
            box._cleanup?.();

            const original = box.querySelector(".text");
            const clone = box.querySelector(".clone");
            if (!original || !clone) return;

            // Очищаем предыдущие split-инстансы
            original._splitTextInstance?.revert();
            clone._splitTextInstance?.revert();

            // Сохраняем пробелы перед SplitText
            preserveSpaces(original);
            preserveSpaces(clone);

            // Разбиваем на символы
            const splitOriginal = new SplitText(original, {
                type: "chars",
                charsClass: "char",
            });
            const splitClone = new SplitText(clone, {
                type: "chars",
                charsClass: "char",
            });

            original._splitTextInstance = splitOriginal;
            clone._splitTextInstance = splitClone;

            const tl = gsap.timeline({ paused: true });

            const isTwo = box.classList.contains("animated__box-two");
            const isThree = box.classList.contains("animated__box-three");

            const commonSettings = {
                duration: isTwo ? 0.5 : 0.4,
                stagger: { amount: 0.05, from: isThree ? "edges" : undefined },
                ease: "power4.inOut",
            };

            if (isTwo) {
                tl.fromTo(splitOriginal.chars, { x: 0 }, { x: "-100%", ...commonSettings }, 0)
                    .fromTo(splitClone.chars, { x: "100%" }, { x: 0, ...commonSettings }, 0);
            } else {
                tl.fromTo(splitOriginal.chars, { y: 0 }, { y: "-100%", ...commonSettings }, 0)
                    .fromTo(splitClone.chars, { y: "100%" }, { y: 0, ...commonSettings }, 0);
            }

            const onEnter = () => tl.play();
            const onLeave = () => tl.reverse();

            box.addEventListener("mouseenter", onEnter);
            box.addEventListener("mouseleave", onLeave);

            box._cleanup = () => {
                splitOriginal.revert();
                clone._splitTextInstance?.revert();
                tl.kill();
                box.removeEventListener("mouseenter", onEnter);
                box.removeEventListener("mouseleave", onLeave);
            };
        });
    });
}
