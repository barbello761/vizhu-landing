import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '../ui/Button';
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
      {/* Full-bleed background. Drop a real СМИ photo into
          /public/assets/hero-bg.jpg and it will replace the gradient. */}
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.photo} />
        <div className={styles.overlay} />
        <div className={styles.grid} />
      </div>

      <div className={styles.inner}>
        <motion.p className={styles.kicker} {...rise(0)}>
          <span className={styles.dot} aria-hidden="true" />
          Доступно 24/7 · бесплатно по ИПРА
        </motion.p>

        <motion.h1 id="hero-title" className={styles.title} {...rise(0.1)}>
          <span className={styles.brand}>«ВИЖУ»</span>
          {' — '}российский AI-ассистент<br className={styles.brBreak} /> для незрячих
        </motion.h1>

        <motion.p className={styles.lede} {...rise(0.25)}>
          Распознавайте купюры, читайте текст, вызывайте волонтёра 24/7.
        </motion.p>

        <motion.div className={styles.ctas} {...rise(0.4)}>
          {/* Primary (первостепенная) → the app itself */}
          <Button asChild variant="primary" size="lg">
            <a
              href={APP_URL}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Попробовать приложение ВИЖУ — открыть в новой вкладке"
            >
              Попробовать
            </a>
          </Button>
          {/* Secondary (второстепенная) → О проекте */}
          <Button asChild variant="outlineLight" size="lg">
            <a href="#about" aria-label="Подробнее о проекте — перейти к разделу «О проекте»">
              Подробнее
            </a>
          </Button>
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
