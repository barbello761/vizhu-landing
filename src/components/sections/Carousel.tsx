import { useState, useCallback, useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion, type Variants } from 'framer-motion';
import styles from './Carousel.module.scss';

type Slide = {
  imgSrc: string;
  title: string;
  body: string;
  label: string;
};

const slides: Slide[] = [
  {
    imgSrc: '/assets/screens/screen-camera.png', title: 'AI-зрение 24/7',
    body: 'Камера смартфона становится глазами пользователя. Достаточно навести телефон на объект — и ИИ мгновенно опишет увиденное голосом: сцену вокруг, обстановку комнаты, что лежит на столе. Раньше для этого нужен был помощник, теперь незрячий человек обретает самостоятельность.',
    label: 'Экран камеры: AI описывает сцену вслух в реальном времени.',
  },
  {
    imgSrc: '/assets/screens/screen-money.png', title: 'Распознавание купюр',
    body: 'Все российские банкноты от 10 до 5000 рублей распознаются меньше чем за секунду. Ассистент называет номинал голосом — больше не нужно просить кассира или прохожего проверить сдачу.',
    label: 'Экран камеры: распознана купюра 1000 рублей, уверенность 95%.',
  },
  {
    imgSrc: '/assets/screens/screen-chat.png', title: 'Чтение текста (OCR)',
    body: 'Печатный и частично рукописный текст ВИЖУ читает вслух: квитанции, ценники, письма, инструкции к лекарствам. Можно переспросить детали — ассистент помнит, о чём шла речь.',
    label: 'Экран диалога: ассистент читает квитанцию вслух.',
  },
  {
    imgSrc: '/assets/screens/screen-home.png', title: 'Голосовое управление',
    body: 'AI понимает обычную речь. Скажите «опиши, что вокруг», «прочитай документ» или «сколько денег» — приложение само поймёт команду и выполнит её. Не нужно искать пальцем иконку: достаточно произнести вслух.',
    label: 'Главный экран: кнопка «Нажмите и говорите» и быстрые действия.',
  },
  {
    imgSrc: '/assets/screens/screen-volunteer.png', title: 'Связь с волонтёром',
    body: 'Когда нужен живой человек — сориентироваться \nв незнакомом здании или найти упавшую вещь — ВИЖУ соединит с волонтёром. Видеозвонок свободному добровольцу, который увидит картинку с камеры \nи подскажет голосом. Функция в активной разработке.',
    label: 'Экран вызова волонтёра: таймер ожидания и кнопка звонка.',
  },
  {
    imgSrc: '/assets/screens/screen-history.png', title: 'История запросов',
    body: 'Все распознавания и диалоги сохраняются: можно вернуться к прошлой купюре, перечитать документ \nили повторить результат. Вся история — под рукой, \nс поиском и голосом.',
    label: 'Экран истории: список прошлых распознаваний с датой и временем.',
  },
];


export function Carousel() {
  const reduced = useReducedMotion();
  const [[index, dir], setState] = useState<[number, number]>([0, 0]);
  const n = slides.length;

  const goto = useCallback(
    (next: number, direction: number) => setState([(next + n) % n, direction]),
    [n],
  );
  const paginate = useCallback((d: number) => goto(index + d, d), [goto, index]);

  // Auto-advance every 6s. Re-arms on each slide change; pauses on hover /
  // focus-within / drag and is disabled for prefers-reduced-motion.
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || reduced) return;
    const id = window.setTimeout(() => paginate(1), 6000);
    return () => window.clearTimeout(id);
  }, [index, paused, reduced, paginate]);

  const variants: Variants = {
    enter: (d: number) => ({ opacity: 0, x: reduced ? 0 : d > 0 ? 64 : -64 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: reduced ? 0 : d > 0 ? -64 : 64 }),
  };

  const slide = slides[index];

  return (
    <section
      id="features"
      className={styles.section}
      aria-labelledby="carousel-title"
      aria-roledescription="карусель"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Возможности</span>
          <h2 id="carousel-title">Что умеет ВИЖУ</h2>
        </header>

        <div
          className={styles.stage}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') { e.preventDefault(); paginate(-1); }
            if (e.key === 'ArrowRight') { e.preventDefault(); paginate(1); }
          }}
        >
          <button
            type="button"
            className={styles.arrow}
            onClick={() => paginate(-1)}
            aria-label="Предыдущая возможность"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
              <path fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" d="m15 6-6 6 6 6" />
            </svg>
          </button>

          <div className={styles.viewport} aria-live="polite">
            <AnimatePresence mode="wait" custom={dir} initial={false}>
              <motion.div
                key={index}
                className={styles.slide}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: reduced ? 0 : 0.4, ease: [0.16, 1, 0.3, 1] }}
                role="group"
                aria-roledescription="слайд"
                aria-label={`${index + 1} из ${n}: ${slide.title}`}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.18}
                onDragStart={() => setPaused(true)}
                onDragEnd={(_, info) => {
                  const power = info.offset.x * info.velocity.x;
                  if (info.offset.x < -60 || power < -6000) paginate(1);
                  else if (info.offset.x > 60 || power > 6000) paginate(-1);
                  setPaused(false);
                }}
              >
                <div className={styles.phone}>
                  <img
                    src={slide.imgSrc}
                    alt={slide.label}
                    className={styles.phoneImg}
                  />
                </div>

                <div className={styles.copy}>
                  <span className={styles.count}>{index + 1} / {n}</span>
                  <h3>{slide.title}</h3>
                  <p>{slide.body}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            type="button"
            className={styles.arrow}
            onClick={() => paginate(1)}
            aria-label="Следующая возможность"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
              <path fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" d="m9 6 6 6-6 6" />
            </svg>
          </button>
        </div>

        <div className={styles.controls}>
          {/* Mobile-only nav buttons (side arrows are desktop-only) */}
          <button
            type="button"
            className={styles.navBtn}
            onClick={() => paginate(-1)}
            aria-label="Предыдущая возможность"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" d="m15 6-6 6 6 6" />
            </svg>
          </button>

          <div className={styles.dots} role="tablist" aria-label="Возможности приложения">
            {slides.map((s, i) => (
              <button
                key={s.title}
                type="button"
                role="tab"
                className={styles.dot}
                data-active={i === index || undefined}
                aria-selected={i === index}
                aria-label={s.title}
                onClick={() => goto(i, i > index ? 1 : -1)}
              />
            ))}
          </div>

          <button
            type="button"
            className={styles.navBtn}
            onClick={() => paginate(1)}
            aria-label="Следующая возможность"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" d="m9 6 6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
