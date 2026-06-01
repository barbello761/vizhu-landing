import { Logo } from '../ui/Logo';
import { Reveal } from '../ui/Reveal';
import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <Reveal direction="up" className={styles.inner}>
        <a href="#top" className={styles.brand} aria-label="ВИЖУ — на главную">
          <Logo variant="light" size={48} />
        </a>

        <div className={styles.notes}>
          <p className={styles.copy}>
            © 2026 Команда проекта «Такой-то&nbsp;Бизнес». Все права защищены.
          </p>
          <p>
            Программный продукт «ВИЖУ» создан командой проекта и защищён авторским
            правом. Любое использование вне мероприятия «Я в деле» — по согласованию
            с правообладателями.
          </p>
          <p className={styles.beta}>
            <span className={styles.betaTag}>Бета-версия</span>
            Продукт находится в стадии разработки.
          </p>
        </div>
      </Reveal>
    </footer>
  );
}
