import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '../ui/Button';
import { PhoneMockup } from '../ui/PhoneMockup';
import { ScreenHome } from '../ui/PhoneScreens';
import styles from './Hero.module.scss';

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -120]);
  const blobsY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 80]);

  return (
    <section
      id="top"
      ref={ref}
      className={styles.hero}
      aria-labelledby="hero-title"
    >
      <motion.div className={styles.bg} aria-hidden="true" style={{ y: blobsY }}>
        <div className={styles.blob} data-pos="a" />
        <div className={styles.blob} data-pos="b" />
        <div className={styles.grid} />
      </motion.div>

      <div className={styles.inner}>
        <div className={styles.copy}>
          <motion.span
            className={styles.kicker}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <span className={styles.dot} aria-hidden="true" />
            Первый российский AI-ассистент для незрячих
          </motion.span>

          <motion.h1
            id="hero-title"
            className={styles.title}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
            }}
          >
            {['Глаза, которые', 'всегда рядом.'].map((line, i) => (
              <motion.span
                key={line}
                style={{ display: 'block' }}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
                }}
              >
                {line}
                {i === 1 && <span className={styles.accent}> Голосом.</span>}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className={styles.lede}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.35 }}
          >
            «ВИЖУ» — голосовой AI-помощник на базе GigaChat и YandexGPT.
            Опишет сцену, прочитает документ, узнаёт купюры и соединит с волонтёром —
            круглосуточно и бесплатно по ИПРА.
          </motion.p>

          <motion.div
            className={styles.ctas}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.45 }}
          >
            <Button asChild variant="primary" size="lg">
              <a
                href="#download"
                aria-label="Перейти в раздел: опробовать приложение ВИЖУ"
              >
                Опробуйте сейчас
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a
                href="#features"
                aria-label="Узнать подробнее о возможностях ВИЖУ"
              >
                Подробнее
                <span aria-hidden="true" style={{ marginLeft: 8 }}>→</span>
              </a>
            </Button>
          </motion.div>

          <motion.ul
            className={styles.proof}
            aria-label="Ключевые факты"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.55 } },
            }}
          >
            {[
              { v: '24/7',  s: 'помощь голосом' },
              { v: '< 3 c', s: 'описание сцены' },
              { v: 'Premium', s: 'бесплатно по ИПРА' },
            ].map((it) => (
              <motion.li
                key={it.v}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
                }}
              >
                <strong>{it.v}</strong>
                <span>{it.s}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          className={styles.visual}
          aria-hidden="false"
          initial={{ opacity: 0, scale: 0.9, rotate: reduced ? 0 : -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.3 }}
          style={{ y: phoneY }}
        >
          <div className={styles.phoneWrap}>
            <PhoneMockup
              size="lg"
              label="Главный экран приложения: большая кнопка «Нажмите и говорите», быстрые действия — «Что вокруг», «Текст», «Купюры», «Волонтёр»"
            >
              <ScreenHome />
            </PhoneMockup>
          </div>

          <motion.div
            className={styles.badge}
            data-pos="top"
            initial={{ opacity: 0, x: -40, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.9 }}
          >
            <span aria-hidden="true">✦</span>
            <span>GigaChat Vision</span>
          </motion.div>
          <motion.div
            className={styles.badge}
            data-pos="bottom"
            initial={{ opacity: 0, x: 40, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: EASE, delay: 1.1 }}
          >
            <span aria-hidden="true">⚡</span>
            <span>Распознавание &lt; 1 c</span>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        className={styles.scroll}
        href="#problem"
        aria-label="Перейти к разделу о проблеме"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <span>Зачем нужен</span>
        <span aria-hidden="true">↓</span>
      </motion.a>
    </section>
  );
}
