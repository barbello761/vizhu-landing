import { Reveal, RevealStagger, RevealItem } from '../ui/Reveal';
import styles from './About.module.scss';

const pillars = [
  {
    title: 'AI-зрение 24/7',
    body: 'Опишет сцену, прочитает документ, узнает купюру за 2 секунды. GigaChat Vision + YandexGPT работают день и ночь.',
    badge: '< 3 сек',
  },
  {
    title: 'Связь с волонтёром',
    body: 'Видеозвонок свободному волонтёру в любое время дня и ночи. Очередь — менее 12 секунд.',
    badge: 'WebRTC + LiveKit',
  },
  {
    title: 'Бесплатно по ИПРА',
    body: 'После включения ВИЖУ в реестр СФР Premium-функции становятся бесплатными — навсегда.',
    badge: 'СФР',
  },
];

export function About() {
  return (
    <section id="about" className={styles.section} aria-labelledby="about-title">
      <div className={styles.inner}>
        <Reveal direction="left" className={styles.left}>
          <span className={styles.eyebrow}>О проекте</span>
          <h2 id="about-title">
            Голосовой ассистент,<br />
            который заменит зрение там, где это нужно
          </h2>
          <p className={styles.body}>
            «ВИЖУ» — российский сервис с голосовым AI-ассистентом
            на базе мультимодальных моделей <strong>GigaChat</strong> и <strong>YandexGPT</strong>.
            Помогаем незрячим и слабовидящим пользователям с повседневными задачами —
            без барьеров и подписки.
          </p>

          <ul className={styles.checklist} aria-label="Преимущества проекта">
            <li>
              <span className={styles.check} aria-hidden="true">✓</span>
              На русском языке, с учётом локального контекста
            </li>
            <li>
              <span className={styles.check} aria-hidden="true">✓</span>
              Работает на Android и iOS, минимальные требования к телефону
            </li>
            <li>
              <span className={styles.check} aria-hidden="true">✓</span>
              Полная совместимость с VoiceOver и TalkBack
            </li>
            <li>
              <span className={styles.check} aria-hidden="true">✓</span>
              Поддерживаем настраиваемую скорость речи и крупные шрифты
            </li>
          </ul>
        </Reveal>

        <RevealStagger
          as="ul"
          className={styles.pillars}
          ariaLabel="Три ключевых принципа"
          stagger={0.12}
        >
          {pillars.map((p, i) => (
            <RevealItem
              as="li"
              direction="right"
              key={p.title}
              className={styles.pillar}
            >
              <div data-i={i}>
                <span className={styles.pillarBadge}>{p.badge}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
