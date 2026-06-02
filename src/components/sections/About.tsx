import { CountUp } from '../ui/CountUp';
import { Reveal, RevealStagger, RevealItem } from '../ui/Reveal';
import styles from './About.module.scss';

// ===== Информативные плашки =====
const plates = [
  { value: 423_658, suffix: '', label: 'взрослых незрячих и слабовидящих в России', accent: false },
  { value: 24, suffix: '/7', label: 'помощь голосом — днём и ночью, без выходных', accent: true },
  { value: 3, prefix: '< ', suffix: ' сек', label: 'на описание сцены через GigaChat Vision', accent: false },
  { value: 0, prefix: '', suffix: ' ₽', label: 'для пользователей с ИПРА — Premium бесплатно*', accent: false, underLabel: '* — планируется в перспективе' },
];

export function About() {
  return (
    <section id="about" className={styles.section} aria-labelledby="about-title">
      <div className={styles.inner}>
        <Reveal as="header" className={styles.header}>
          <span className={styles.eyebrow}>О проекте</span>
          <h2 id="about-title">Голос вместо зрения — там, где это нужно</h2>
          <p>
            «ВИЖУ» — российский сервис с голосовым AI-ассистентом на базе моделей
            GigaChat и YandexGPT. Помогает незрячим и слабовидящим людям с повседневными
            задачами — круглосуточно, на родном языке и без барьеров.
          </p>
        </Reveal>

        {/* ---- Проблематика (Be My Eyes) ---- */}
        <Reveal direction="up" className={styles.problem}>
          <span className={styles.problemMark} aria-hidden="true" />
          <div className={styles.problemText}>
            <p>
              С декабря 2025 <strong>Be My Eyes</strong> больше не работает в России.
              «Робин&nbsp;Онлайн» — сервис с живыми волонтёрами — доступен только по
              будням с 9:00 до 18:00 по Москве.
            </p>
            <p className={styles.problemAccent}>
              Ночью, в выходные или в экстренной ситуации готовой круглосуточной
              альтернативы с ИИ до сих пор не было. ВИЖУ закрывает этот разрыв.
            </p>
          </div>
        </Reveal>

        {/* ---- Плашки ---- */}
        <RevealStagger as="ul" className={styles.plates} ariaLabel="Ключевые факты о проекте" stagger={0.1}>
          {plates.map((p) => (
            <RevealItem as="li" key={p.label} className={styles.plate}>
              <div className={styles.plateInner} data-accent={p.accent || undefined}>
                <div className={styles.count}>
                  <CountUp
                    to={p.value}
                    prefix={p.prefix ?? ''}
                    suffix={p.suffix ?? ''}
                    ariaLabel={`${p.prefix ?? ''}${p.value.toLocaleString('ru-RU')}${p.suffix ?? ''} — ${p.label}`}
                  />
                </div>
                <div className={styles.innerWLabel}>
                  <div>{p.label}</div>
                  {p.underLabel && <div className={styles.underlabel}>{p.underLabel}</div>}
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
