import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';
import styles from './Hero.module.scss';

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const APP_URL = 'https://app.vizhu.su';

export function Hero() {
  const reduced = useReducedMotion();
  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduced ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: EASE, delay },
  });

  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.blob} data-pos="a" />
        <div className={styles.blob} data-pos="b" />
        <div className={styles.grid} />
      </div>

      <div className={styles.inner}>
        <div className={styles.copy}>
          <motion.div className={styles.logoWrap} {...rise(0)}>
            <Logo variant="light" withWordmark />
          </motion.div>

          <motion.h1 id="hero-title" className={styles.title} {...rise(0.1)}>
            Первый российский<br className={styles.brBreak} /> AI-ассистент <br/> для незрячих
          </motion.h1>

          <motion.p className={styles.lede} {...rise(0.25)}>
            {'На базе российских мультимодальных моделей \nGigaChat и YandexGPT — круглосуточная аудиальная помощь незрячим и слабовидящим пользователям, голосом и без барьеров'}
          </motion.p>

          <motion.div className={styles.ctas} {...rise(0.4)}>
            <Button asChild variant="light" size="lg">
              <a
                href={APP_URL}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Попробовать приложение ВИЖУ — открыть в новой вкладке"
              >
                Попробовать
              </a>
            </Button>
            <Button asChild variant="outlineLight" size="lg">
              <a href="#about" aria-label="Подробнее о проекте — перейти к разделу «О проекте»">
                Подробнее
              </a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.9, rotate: reduced ? 0 : -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.3 }}
        >
          <div className={styles.phoneWrap}>
            <img
              src="/assets/screens/screen-hero.png"
              alt="Главный экран приложения ВИЖУ"
              className={styles.phoneImg}
            />
          </div>
        </motion.div>
      </div>

      <motion.a
        className={styles.scroll}
        href="#about"
        aria-label="Перейти к разделу «О проекте»"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <span>О проекте</span>
        <span aria-hidden="true">↓</span>
      </motion.a>
    </section>
  );
}
