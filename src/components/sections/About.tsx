import { CountUp } from '../ui/CountUp';
import { Reveal, RevealStagger, RevealItem } from '../ui/Reveal';
import styles from './About.module.scss';

// ===== Информативные плашки =====
const plates = [
  { value: 423_658, suffix: '', label: 'взрослых незрячих и слабовидящих в России', accent: false, spin: true },
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
            Возвращаем самостоятельность незрячим людям с помощью AI и волонтеров
          </p>
        </Reveal>

        {/* ---- Проблематика (Be My Eyes) ---- */}
        <Reveal direction="up" className={styles.problem}>
          <span className={styles.problemMark} aria-hidden="true" />
          <div className={styles.problemText}>
            <p>
              <strong>«ВИЖУ»</strong> родился из конкретной проблемы. <br />
              В декабре 2025 года зарубежное приложение <strong>Be My Eyes</strong> перестало работать в России.
              <br/>Единственная отечественная альтернатива «Робин&nbsp;Онлайн» работает только с 9 по 18 по будням и не имеет искусственного интеллекта.
            </p>
          
          </div>
        </Reveal>

        {/* ---- Плашки ---- */}
        <RevealStagger as="ul" className={styles.plates} ariaLabel="Ключевые факты о проекте" stagger={0.1}>
          {plates.map((p) => (
            <RevealItem as="li" key={p.label} className={styles.plate}>
              <div className={styles.plateInner} data-accent={p.accent || undefined}>
                <div className={styles.count}>
                  {p.spin ? (
                    <CountUp
                      to={p.value}
                      prefix={p.prefix ?? ''}
                      suffix={p.suffix ?? ''}
                      ariaLabel={`${p.prefix ?? ''}${p.value.toLocaleString('ru-RU')}${p.suffix ?? ''} — ${p.label}`}
                    />
                  ) : (
                    `${p.prefix ?? ''}${p.value.toLocaleString('ru-RU')}${p.suffix ?? ''}`
                  )}
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
