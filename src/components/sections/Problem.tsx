import { Reveal, RevealStagger, RevealItem } from '../ui/Reveal';
import styles from './Problem.module.scss';

const items = [
  {
    title: 'Уход Be My Eyes',
    body: 'С декабря 2025 Be My Eyes перестал работать в России. 3 000 пользователей разом потеряли единственный голосовой сервис помощи.',
    stat: '3 000',
    statSub: 'пользователей в РФ',
    icon: 'broken',
  },
  {
    title: 'Зарубежные аналоги недоступны',
    body: 'Seeing AI, Envision, Lookout, Aira — требуют смены региона аккаунта. Для незрячего пользователя это непреодолимый барьер.',
    stat: '35 000',
    statSub: 'волонтёров готовы помогать',
    icon: 'lock',
  },
  {
    title: 'Отечественный аналог ограничен',
    body: '«Робин Онлайн» работает только 9:00–18:00 МСК по будням и не содержит встроенного ИИ — ночью помощи нет.',
    stat: '1',
    statSub: 'альтернатива — и та только в рабочее время',
    icon: 'clock',
  },
];

const icons = {
  broken: (
    <path
      fill="currentColor"
      d="M12 2 9 6.5 4 7l3.5 4-1 5L12 13l5.5 3L16.5 11 20 7l-5-0.5Z"
    />
  ),
  lock: (
    <path
      fill="currentColor"
      d="M12 1a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-1V6a5 5 0 0 0-5-5Zm-3 8V6a3 3 0 1 1 6 0v3H9Z"
    />
  ),
  clock: (
    <path
      fill="currentColor"
      d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 11h5v-2h-3V6h-2v7Z"
    />
  ),
};

export function Problem() {
  return (
    <section id="problem" className={styles.section} aria-labelledby="problem-title">
      <div className={styles.inner}>
        <Reveal as="header" className={styles.header}>
          <span className={styles.eyebrow}>Проблема</span>
          <h2 id="problem-title">
            450 тысяч человек в России — без круглосуточного помощника
          </h2>
          <p>
            Отсутствие доступного AI-ассистента ведёт к системной зависимости незрячих
            людей от посторонней помощи в самых обычных повседневных задачах.
          </p>
        </Reveal>

        <RevealStagger
          as="ul"
          className={`${styles.grid} snap-target`}
          ariaLabel="Три причины проблемы"
        >
          {items.map((item) => (
            <RevealItem as="li" className={styles.card} key={item.title}>
              <div className={styles.iconBox} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22">
                  {icons[item.icon as keyof typeof icons]}
                </svg>
              </div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <div className={styles.stat}>
                <strong>{item.stat}</strong>
                <span>{item.statSub}</span>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal direction="scale">
          <div className={styles.callout} role="note">
            <span className={styles.calloutIcon} aria-hidden="true">!</span>
            <p>
              Получается так: в стране, где 423 658 человек имеют инвалидность по зрению,
              нет ни одного круглосуточного AI-ассистента на родном языке.
              <strong> ВИЖУ закрывает этот разрыв.</strong>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
