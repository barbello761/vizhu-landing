import { Logo } from '../ui/Logo';
import { Reveal } from '../ui/Reveal';
import styles from './Footer.module.scss';

const columns = [
  {
    title: 'Продукт',
    links: [
      { href: '#features',  label: 'Возможности' },
      { href: '#how',       label: 'Как работает' },
      { href: '#download',  label: 'Опробовать сейчас' },
      { href: '#roadmap',   label: 'План развития' },
    ],
  },
  {
    title: 'Партнёрам',
    links: [
      { href: 'mailto:partners@vizhuapp.ru', label: 'Стать партнёром' },
      { href: '#download', label: 'Для НКО' },
      { href: '#download', label: 'Для бизнеса' },
      { href: '#download', label: 'Пресс-кит' },
    ],
  },
  {
    title: 'Поддержка',
    links: [
      { href: 'mailto:help@vizhuapp.ru', label: 'help@vizhuapp.ru' },
      { href: 'tel:+79381263099',        label: '8 938 126 30 99' },
      { href: '#download',               label: 'FAQ' },
      { href: '#download',               label: 'Доступность' },
    ],
  },
];

export function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <Reveal direction="up" className={styles.brandBlock}>
          <a href="#top" className={styles.brand} aria-label="ВИЖУ — на главную">
            <Logo variant="light" size={36} />
          </a>
          <p className={styles.tagline}>
            Российский AI-ассистент для незрячих и слабовидящих.
            Доступен 24/7 — голосом, без барьеров.
          </p>

          <ul className={styles.social} aria-label="Социальные сети">
            <li>
              <a
                href="https://t.me/abdllvdn"
                aria-label="Telegram ВИЖУ"
                rel="noreferrer noopener"
                target="_blank"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                  <path fill="currentColor" d="M9.04 15.36 8.9 19.4c.34 0 .49-.15.67-.32l1.61-1.55 3.34 2.45c.61.34 1.05.16 1.21-.57l2.2-10.3c.2-.9-.32-1.26-.92-1.05L3.74 11.3c-.88.34-.86.83-.15 1.05l3.45 1.08 8-5.04c.38-.24.72-.11.44.16Z"/>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://vk.com/abdllvdn"
                aria-label="VK ВИЖУ"
                rel="noreferrer noopener"
                target="_blank"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                  <path fill="currentColor" d="M12.6 17h1.4c.4 0 .6-.3.6-.6 0-.4 0-1.4.7-1.6.7-.2 1.6 1.5 2.6 2 .5.3 1.3.2 1.3.2h1.7s1-.1.6-1c-.1-.4-1-1.5-2.4-2.9-.7-.8-1.7-1-1.3-1.7.3-.4 1.3-1.5 1.8-2.3 1-1.4 1.6-2.4 1.4-2.9-.2-.5-.6-.3-1.4-.3h-2.3c-.4 0-.5.2-.7.5-.6 1.4-1.7 3.5-2.4 4-.3.2-.5.1-.5-.4V8c0-.6-.2-.9-.6-.9H10c-.3 0-.5.2-.5.4 0 .6.6.7.7 1.9v2.9c0 .7-.1 1-.4.9-.7-.2-1.7-3-2.4-5.1-.2-.6-.4-.7-.9-.7H4.2c-.7 0-.8.3-.6.7C5.5 11 8.4 17 12.6 17Z"/>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@vizhuapp.ru"
                aria-label="Написать на почту"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                  <path fill="currentColor" d="M4 6h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm0 2v.3l8 5.2 8-5.2V8H4Zm0 2.7V18h16v-7.3l-7.5 4.8a1 1 0 0 1-1 0L4 10.7Z"/>
                </svg>
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal direction="up" delay={0.1} className={styles.linkColumns}>
          {columns.map((col) => (
            <nav
              className={styles.col}
              key={col.title}
              aria-label={col.title}
            >
              <h3 className={styles.colTitle}>{col.title}</h3>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </Reveal>
      </div>

      <div className={styles.legal}>
        <span>© 2026 Команда «Такой-то Бизнес». Проект ВИЖУ.</span>
        <span>Сделано в России · с заботой о доступности</span>
      </div>
    </footer>
  );
}
