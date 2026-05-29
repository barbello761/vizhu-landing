import { motion } from 'framer-motion';
import { Reveal, RevealStagger, RevealItem } from '../ui/Reveal';
import styles from './Market.module.scss';

const tiers = [
  {
    code: 'TAM',
    name: 'Total Addressable Market',
    body: 'Все потенциальные пользователи в РФ — 1,5–1,8 млн человек',
    value: '7,2 — 12,8 млрд ₽',
    pct: 100,
  },
  {
    code: 'SAM',
    name: 'Serviceable Available Market',
    body: 'Со смартфоном и digital-грамотные, до 75 лет',
    value: '1,0 — 1,5 млрд ₽',
    pct: 22,
  },
  {
    code: 'SOM',
    name: 'Serviceable Obtainable Market',
    body: 'Реалистичная доля рынка за 3 года работы',
    value: '30 — 75 млн ₽',
    pct: 7,
  },
];

const stats = [
  {
    title: 'Мировой рынок · 2026',
    value: '5–6 млрд $',
    sub: 'Visual Impairment AT, CAGR 12–14%',
  },
  {
    title: 'AI в Accessibility',
    value: '28,7%',
    sub: 'CAGR к 2034 — 52,4 млрд $ (Market.us)',
  },
  {
    title: 'B2B/B2G множитель',
    value: '×3 — 5',
    sub: 'K SOM — потенциал 200–300 млн ₽ ARR',
  },
];

export function Market() {
  return (
    <section id="market" className={styles.section} aria-labelledby="market-title">
      <div className={styles.inner}>
        <Reveal as="header" className={styles.header}>
          <span className={styles.eyebrow}>Рынок</span>
          <h2 id="market-title">
            TAM · SAM · SOM —<br />и куда движется индустрия
          </h2>
          <p>
            Целевая аудитория составляет 1,51–1,78 млн человек. ARPU ₽400–600/мес для Premium.
            Госпрограмма «Доступная среда» осваивает ₽88–95 млрд в год.
          </p>
        </Reveal>

        <RevealStagger as="ul" className={`${styles.tiers} snap-target`} ariaLabel="Слои рынка" stagger={0.15}>
          {tiers.map((t, i) => (
            <RevealItem as="li" key={t.code} className={styles.tier} direction="left">
              <div data-i={i} className={styles.tierWrap}>
                <div className={styles.tierLeft}>
                  <span className={styles.code}>{t.code}</span>
                  <div>
                    <h3>{t.name}</h3>
                    <p>{t.body}</p>
                  </div>
                </div>
                <div className={styles.tierBar} aria-hidden="true">
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: `${t.pct}%` }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 + i * 0.1 }}
                  />
                </div>
                <strong className={styles.tierValue}>{t.value}</strong>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>

        <RevealStagger as="ul" className={`${styles.stats} snap-target`} ariaLabel="Глобальные цифры">
          {stats.map((s) => (
            <RevealItem as="li" key={s.title}>
              <span className={styles.statLabel}>{s.title}</span>
              <strong>{s.value}</strong>
              <span className={styles.statSub}>{s.sub}</span>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
