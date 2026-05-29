import { Reveal, RevealStagger, RevealItem } from '../ui/Reveal';
import styles from './Roadmap.module.scss';

const stages = [
  {
    period: '2026–2027',
    horizon: '1 год',
    title: 'Краткосрочные цели',
    body: 'MVP в App Store / Google Play / RuStore. 15 000 MAU. Партнёрство с ВОС, бета с 200 пользователями. Грант ФСИ «Старт-ИИ-1», регистрация в реестре российского ПО.',
    tags: ['MVP', '15 000 MAU', 'ФСИ грант'],
  },
  {
    period: '2028–2029',
    horizon: '3 года',
    title: 'Среднесрочные цели',
    body: '180 000 MAU, безубыточность. Включение в федеральный перечень ТСР через СФР. Indoor-навигация в партнёрских объектах. Рейтинг > 4,5 в магазинах приложений.',
    tags: ['180 000 MAU', 'СФР перечень', 'Indoor-нав.'],
  },
  {
    period: '2030–2031',
    horizon: '5 лет',
    title: 'Долгосрочные цели',
    body: 'Экспансия в СНГ — 180 млн русскоговорящих, 4–5 млн незрячих. White-label для крупнейших банков и госкорпораций. Первый российский accessibility-бренд экспортного качества.',
    tags: ['СНГ', 'White-label', 'Экспорт'],
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className={styles.section} aria-labelledby="roadmap-title">
      <div className={styles.inner}>
        <Reveal as="header" className={styles.header}>
          <span className={styles.eyebrow}>План развития</span>
          <h2 id="roadmap-title">От MVP до накопления экспортного потенциала</h2>
          <p>
            К концу 2027 года — 180 000 активных пользователей в месяц с удержанием
            не менее 40% на 3-й месяц, 10 000 Premium-подписчиков, регистрация в Реестре
            отечественного ПО и пользовательский рейтинг ≥ 4.5.
          </p>
        </Reveal>

        <RevealStagger
          as="ol"
          className={styles.timeline}
          ariaLabel="Этапы развития"
          stagger={0.18}
        >
          {stages.map((s, i) => (
            <RevealItem as="li" key={s.period} className={`${styles.stage} snap-target`} direction="right">
              <div className={styles.markerColumn} aria-hidden="true">
                <div className={styles.marker}>{i + 1}</div>
                {i < stages.length - 1 && <div className={styles.line} />}
              </div>

              <div className={styles.content}>
                <div className={styles.meta}>
                  <span className={styles.horizon}>{s.horizon}</span>
                  <span className={styles.period}>{s.period}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <ul className={styles.tags} aria-label="Ключевые маркеры этапа">
                  {s.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
