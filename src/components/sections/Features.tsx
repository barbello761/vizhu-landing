import { Reveal, RevealStagger, RevealItem } from '../ui/Reveal';
import styles from './Features.module.scss';

const ready = [
  {
    title: 'AI-описание сцены',
    body: 'GigaChat Vision отвечает что и где находится — через 3 секунды после нажатия.',
    tag: 'GigaChat Vision',
    icon: (
      <path
        fill="currentColor"
        d="M12 5a7 7 0 0 1 6.99 6.74L19 12l-.01.26A7 7 0 0 1 5 12a7 7 0 0 1 7-7Zm0 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
      />
    ),
  },
  {
    title: 'Купюры РФ',
    body: 'Все номиналы 10–5000 ₽ — распознаются менее чем за секунду. Голосом сообщает сумму.',
    tag: '< 1 c',
    icon: (
      <path
        fill="currentColor"
        d="M3 6h18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm9 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
      />
    ),
  },
  {
    title: 'OCR с TTS',
    body: 'Распознаём печатный и частично рукописный текст. Озвучиваем голосом нужной скорости.',
    tag: 'YandexSpeechKit',
    icon: (
      <path
        fill="currentColor"
        d="M4 4h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm2 4h12v2H6V8Zm0 4h12v2H6v-2Zm0 4h8v2H6v-2Z"
      />
    ),
  },
];

const dev = [
  {
    title: 'Видеосвязь с волонтёром',
    body: 'WebRTC + LiveKit, авто-распределение свободных операторов в очереди.',
    tag: 'Q3 2026',
    icon: (
      <path
        fill="currentColor"
        d="M3 7h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Zm16 1.5 4-2v11l-4-2v-7Z"
      />
    ),
  },
  {
    title: 'Голосовые команды',
    body: 'Yandex SpeechKit и Сбер SmartSpeech — управление без касаний экрана.',
    tag: 'Q4 2026',
    icon: (
      <path
        fill="currentColor"
        d="M12 14a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3Zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V21h2v-3.08A7 7 0 0 0 19 11Z"
      />
    ),
  },
  {
    title: 'Офлайн-OCR',
    body: 'Распознавание текста даже без доступа к сети — критично в транспорте и на улице.',
    tag: 'Q1 2027',
    icon: (
      <path
        fill="currentColor"
        d="M19 9h-1V7a6 6 0 0 0-11.8-1.4 4 4 0 0 0 .8 7.9V15a1 1 0 0 0 1 1h2v-3H8l4-5 4 5h-2v3h2a4 4 0 0 0 3-7Z"
      />
    ),
  },
];

export function Features() {
  return (
    <section id="features" className={styles.section} aria-labelledby="features-title">
      <div className={styles.inner}>
        <Reveal as="header" className={styles.header}>
          <span className={styles.eyebrow}>Возможности (MVP)</span>
          <h2 id="features-title">
            То, что уже работает —<br />и куда мы движемся
          </h2>
          <p>
            MVP покрывает 80% повседневных задач незрячего пользователя.
            Параллельно ведём разработку расширенных модулей.
          </p>
        </Reveal>

        <div className={`${styles.group} snap-target`} aria-labelledby="ready-h3" data-key="ready">
          <Reveal className={styles.groupHead} as="div">
            <h3 id="ready-h3">
              <span className={styles.statusDot} data-status="ready" aria-hidden="true" />
              Уже готово
            </h3>
            <span className={styles.groupBadge} data-status="ready">3 из 6</span>
          </Reveal>
          <RevealStagger as="ul" className={styles.grid} ariaLabel="Реализованные модули">
            {ready.map((f) => (
              <RevealItem as="li" key={f.title} className={styles.card}>
                <div className={styles.iconBox} aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="24" height="24">{f.icon}</svg>
                </div>
                <h4>{f.title}</h4>
                <p>{f.body}</p>
                <span className={styles.tag}>{f.tag}</span>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>

        <div className={styles.group} aria-labelledby="dev-h3">
          <Reveal className={styles.groupHead} as="div">
            <h3 id="dev-h3">
              <span className={styles.statusDot} data-status="dev" aria-hidden="true" />
              В разработке
            </h3>
            <span className={styles.groupBadge} data-status="dev">Релиз — 2026/27</span>
          </Reveal>
          <RevealStagger as="ul" className={styles.grid} ariaLabel="Модули в разработке">
            {dev.map((f) => (
              <RevealItem
                as="li"
                key={f.title}
                className={`${styles.card} ${styles.cardDev}`}
              >
                <div className={styles.iconBox} data-status="dev" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="24" height="24">{f.icon}</svg>
                </div>
                <h4>{f.title}</h4>
                <p>{f.body}</p>
                <span className={styles.tag} data-status="dev">{f.tag}</span>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}
