import { CountUp } from '../ui/CountUp';
import { Reveal, RevealStagger, RevealItem } from '../ui/Reveal';
import styles from './Stats.module.scss';

const causes = [
  { name: 'Глаукома',                                     value: 101_224, pct: 23.9 },
  { name: 'Другие заболевания глаза',                     value: 190_272, pct: 44.9 },
  { name: 'Атрофия зрительного нерва',                    value:  46_041, pct: 10.9 },
  { name: 'Дегенерация макулы и заднего полюса',          value:  49_411, pct: 11.7 },
  { name: 'Дегенеративная миопия',                        value:  28_418, pct:  6.7 },
  { name: 'Диабетическая ретинопатия',                    value:   8_292, pct:  2.0 },
];

const audience = [
  {
    type: 'Основная',
    title: 'Незрячие и слабовидящие',
    body: '50+ — основной возраст. 79,7% используют Android (Яндекс, 2023). Средний доход — 24–26 тыс. ₽ в месяц.',
  },
  {
    type: 'Косвенная',
    title: 'Родственники и опекуны',
    body: 'AI-ассистент даёт близкому человеку самостоятельность — снимает нагрузку с семьи.',
  },
  {
    type: 'Косвенная',
    title: 'Волонтёры Добро.рф',
    body: '36% россиян занимались волонтёрской деятельностью в 2025 году (ВЦИОМ). Готовы помогать.',
  },
];

const bigNumbers = [
  {
    value: 423_658,
    label: 'взрослых инвалидов по зрению в РФ',
    source: 'Минздрав РФ, 2024',
    accent: false,
  },
  {
    value: 50,
    suffix: '+',
    label: 'основной возраст пользователей',
    source: 'ВОЗ, 80% лиц с нарушением зрения',
    accent: true,
  },
  {
    value: 79.7,
    suffix: '%',
    decimals: 1,
    label: 'пользуются устройствами на Android',
    source: 'Яндекс.Метрика, 2023',
    accent: false,
  },
  {
    value: 35_000,
    label: 'волонтёров готовы помогать',
    source: 'Be My Eyes RU pre-12.2025',
    accent: false,
  },
];

export function Stats() {
  return (
    <section id="audience" className={styles.section} aria-labelledby="stats-title">
      <div className={styles.inner}>
        <Reveal as="header" className={styles.header}>
          <span className={styles.eyebrow}>Аудитория и масштаб</span>
          <h2 id="stats-title">Кому помогает ВИЖУ — и сколько таких людей</h2>
          <p>
            По данным ВОЗ, 80% лиц с нарушением зрения — старше 50 лет.
            В России более 1 тыс. человек получают инвалидность по зрению каждый год.
          </p>
        </Reveal>

        <RevealStagger
          as="ul"
          className={`${styles.bigNumbers} snap-target`}
          ariaLabel="Ключевые цифры"
          stagger={0.1}
        >
          {bigNumbers.map((n) => (
            <RevealItem as="li" key={n.label} className={styles.bigCard}>
              <div
                className={styles.bigCardInner}
                data-accent={n.accent || undefined}
              >
                <strong>
                  <CountUp
                    to={n.value}
                    suffix={n.suffix ?? ''}
                    decimals={n.decimals ?? 0}
                    ariaLabel={`${n.value.toLocaleString('ru-RU')}${n.suffix ?? ''} — ${n.label}`}
                  />
                </strong>
                <span>{n.label}</span>
                <small className={styles.source}>
                  <span aria-hidden="true">источник: </span>
                  {n.source}
                </small>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>

        <div className={styles.split}>
          <Reveal direction="up" className={`${styles.causes} snap-target`} as="div">
            <h3>Причины инвалидности по зрению среди взрослых</h3>
            <ul aria-label="Распределение причин">
              {causes.map((c) => (
                <li key={c.name}>
                  <div className={styles.causeHead}>
                    <span>{c.name}</span>
                    <strong>{c.value.toLocaleString('ru-RU')}</strong>
                  </div>
                  <div
                    className={styles.bar}
                    role="progressbar"
                    aria-valuenow={c.pct}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${c.name}: ${c.pct.toLocaleString('ru-RU')}%`}
                  >
                    <span style={{ width: `${(c.pct / 45) * 100}%` }} />
                  </div>
                  <span className={styles.causePct}>{c.pct.toLocaleString('ru-RU')}%</span>
                </li>
              ))}
            </ul>
            <p className={styles.causesNote}>
              Источник: Минздрав РФ, 2024.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.1} className={`${styles.audience} snap-target`} as="div">
            <h3>Целевая аудитория</h3>
            <RevealStagger
              as="ul"
              className={styles.audList}
              ariaLabel="Сегменты аудитории"
              stagger={0.12}
            >
              {audience.map((a) => (
                <RevealItem
                  as="li"
                  key={a.title}
                  className={styles.audItem}
                >
                  <div data-type={a.type === 'Основная' ? 'main' : 'side'}>
                    <span className={styles.tag}>{a.type}</span>
                    <h4>{a.title}</h4>
                    <p>{a.body}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
