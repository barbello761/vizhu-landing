import { useEffect, useRef, useState } from 'react';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import styles from './Header.module.scss';

const nav = [
  { href: '#problem',  label: 'Проблема' },
  { href: '#features', label: 'Возможности' },
  { href: '#audience', label: 'Аудитория' },
  { href: '#roadmap',  label: 'План' },
  { href: '#download', label: 'Опробовать' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const firstLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock background scroll while mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) firstLink.current?.focus();
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header
      className={styles.header}
      data-scrolled={scrolled || undefined}
      role="banner"
    >
      <div className={styles.inner}>
        <a
          href="#top"
          className={styles.brand}
          aria-label="ВИЖУ — на главную"
        >
          <Logo size={64} />
        </a>

        <nav className={styles.nav} aria-label="Основная навигация">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Button asChild variant="primary" size="md">
            <a href="#download" aria-label="Опробовать приложение ВИЖУ">
              Опробовать
            </a>
          </Button>

          <button
            type="button"
            className={styles.burger}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            onClick={() => setOpen((v) => !v)}
          >
            <span data-open={open || undefined} />
            <span data-open={open || undefined} />
            <span data-open={open || undefined} />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={styles.mobileSheet}
        data-open={open || undefined}
        hidden={!open}
      >
        <nav aria-label="Мобильная навигация">
          <ul>
            {nav.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  ref={i === 0 ? firstLink : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
