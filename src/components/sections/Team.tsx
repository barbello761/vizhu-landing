import { team } from '../../data/team';
import { Reveal, RevealStagger, RevealItem } from '../ui/Reveal';
import { VkIcon, TelegramIcon, MaxIcon, MailIcon, PhoneIcon } from '../ui/BrandIcon';
import styles from './Team.module.scss';

// Initials from "Фамилия Имя" → "ФИ".
function initials(name: string) {
  return name
    .split(/[\s-]+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('');
}

export function Team() {
  return (
    <section id="team" className={styles.section} aria-labelledby="team-title">
      <div className={styles.inner}>
        <Reveal as="header" className={styles.header}>
          <span className={styles.eyebrow}>Команда проекта</span>
          <h2 id="team-title">Над ВИЖУ работают</h2>
          <p>Аналитики, инженеры и дизайнер — команда «Такой-то Бизнес» проекта «Я в деле».</p>
        </Reveal>

        <RevealStagger
          as="ul"
          className={styles.grid}
          ariaLabel="Участники команды"
          stagger={0.06}
        >
          {team.map((m, i) => (
            <RevealItem as="li" key={m.name} className={styles.card}>
              <article className={styles.cardInner}>
                <div className={styles.photo} data-i={i % 4}>
                  {m.photo ? (
                    <img src={m.photo} alt={`Фото: ${m.name}`} loading="lazy" />
                  ) : (
                    <span className={styles.placeholder} aria-hidden="true">
                      <svg viewBox="0 0 24 24" className={styles.silhouette}>
                        <path fill="currentColor" d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-5.3 0-9 2.7-9 6.5V22h18v-1.5c0-3.8-3.7-6.5-9-6.5Z" />
                      </svg>
                      <span className={styles.initials}>{initials(m.name)}</span>
                    </span>
                  )}
                </div>

                <div className={styles.body}>
                  <h3 className={styles.name}>{m.name}</h3>
                  <p className={styles.role}>{m.role}</p>

                  <ul className={styles.contacts} aria-label={`Контакты — ${m.name}`}>
                    {m.phone && (
                      <li>
                        <a
                          className={styles.contact}
                          href={`tel:${m.phone}`}
                          aria-label={`Телефон — ${m.name}: ${m.phone}`}
                        >
                          <PhoneIcon size={26} />
                        </a>
                      </li>
                    )}
                    {m.email && (
                      <li>
                        <a
                          className={styles.contact}
                          href={`mailto:${m.email}`}
                          aria-label={`Почта — ${m.name}: ${m.email}`}
                        >
                          <MailIcon size={26} />
                        </a>
                      </li>
                    )}
                    {m.tg && (
                      <li>
                        <a
                          className={styles.contact}
                          href={`https://t.me/${m.tg}`}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`Telegram — ${m.name}`}
                        >
                          <TelegramIcon size={26} />
                        </a>
                      </li>
                    )}
                    {m.vk && (
                      <li>
                        <a
                          className={styles.contact}
                          href={`https://vk.com/${m.vk}`}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`ВКонтакте — ${m.name}`}
                        >
                          <VkIcon size={26} />
                        </a>
                      </li>
                    )}
                    {m.max && (
                      <li>
                        <a
                          className={styles.contact}
                          href={`${m.max}`}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`MAX — ${m.name}`}
                        >
                          <MaxIcon size={26} />
                        </a>
                      </li>
                    )}                  
                  </ul>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
