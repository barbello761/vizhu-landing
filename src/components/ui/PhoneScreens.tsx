import { Logo } from './Logo';
import styles from './PhoneScreens.module.scss';

// ============= 1. Home: voice assistant ==============
export function ScreenHome() {
  return (
    <div className={styles.home} aria-hidden="true">
      <header className={styles.appHeader}>
        <Logo variant="light" size={20} withWordmark />
      </header>

      <div className={styles.heroCard}>
        <span className={styles.heroTitle}>
          Нажмите
          <br />
          и говорите
        </span>
        <div className={styles.micButton}>
          <svg viewBox="0 0 24 24" width="22" height="22">
            <path
              fill="currentColor"
              d="M12 14a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3Zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V21h2v-3.08A7 7 0 0 0 19 11Z"
            />
          </svg>
        </div>
        <span className={styles.heroHint}>
          «Прочитай документ» · «Что вокруг?»<br />«Это сколько денег?»
        </span>
      </div>

      <span className={styles.sectionLabel}>Быстрые действия</span>
      <div className={styles.quickGrid}>
        <div className={styles.quickCard}>Что<br />вокруг</div>
        <div className={styles.quickCard}>
          Текст
          <span aria-hidden="true">Аа</span>
        </div>
        <div className={styles.quickCard}>
          Купюры
          <span aria-hidden="true">₽</span>
        </div>
        <div className={styles.quickCard}>
          Волонтёр
          <span aria-hidden="true">📞</span>
        </div>
      </div>

      <nav className={styles.tabBar}>
        <span data-active="true">Главная</span>
        <span>История</span>
        <span>Помощь</span>
        <span>Профиль</span>
      </nav>
    </div>
  );
}

// ============= 2. Camera-AI dialog ==============
export function ScreenCamera() {
  return (
    <div className={styles.camera} aria-hidden="true">
      <div className={styles.cameraFeed}>
        <span className={styles.cameraTag}>● GigaChat</span>
        <div className={styles.cameraDialog}>
          Перед вами кухня. На столешнице справа — белая керамическая кружка,
          слева открытая упаковка крупы. На стене часы, показывают 9:42.
        </div>
      </div>
      <div className={styles.cameraControls}>
        <button className={styles.controlBtn} data-kind="close">✕</button>
        <button className={styles.controlBtn} data-kind="mic">
          <svg viewBox="0 0 24 24" width="18" height="18">
            <path
              fill="currentColor"
              d="M12 14a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3Zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V21h2v-3.08A7 7 0 0 0 19 11Z"
            />
          </svg>
        </button>
        <button className={styles.controlBtn} data-kind="chat">💬</button>
      </div>
    </div>
  );
}

// ============= 3. Chat history ==============
export function ScreenChat() {
  return (
    <div className={styles.chat} aria-hidden="true">
      <div className={styles.chatHeader}>
        <span>‹</span>
        <span>Диалог о фото</span>
        <span aria-hidden="true">✦</span>
      </div>
      <div className={styles.chatBody}>
        <div className={styles.bubbleSelf}>Слушаю вас!</div>
        <div className={styles.bubbleAI}>Прочитай документ</div>
        <div className={styles.bubbleSelf}>
          Это квитанция ЖКХ за апрель 2026.
          Сумма к оплате — 7 423 рубля, 18 копеек, срок до 25 апреля.
        </div>
        <div className={styles.bubbleAI}>А по статьям что?</div>
        <div className={styles.bubbleSelf}>
          Холодная вода — 577 ₽, горячая — 1 587 ₽, электричество — 998 ₽,
          содержание жилья — 2 145 ₽. Остальное — мелкие позиции.
        </div>
      </div>
    </div>
  );
}

// ============= 4. Volunteer call ==============
export function ScreenVolunteer() {
  return (
    <div className={styles.volunteer} aria-hidden="true">
      <div className={styles.volHeader}>
        <span>‹</span>
        <span>Ищем волонтёра</span>
        <span aria-hidden="true">✦</span>
      </div>
      <div className={styles.volTimer}>00:08</div>
      <div className={styles.volSub}>В сети сейчас 1 249 человек</div>
      <div className={styles.volPulse}>
        <div className={styles.pulseRing} />
        <div className={styles.pulseRing} data-delay="1" />
        <div className={styles.callBtn}>
          <svg viewBox="0 0 24 24" width="22" height="22">
            <path
              fill="currentColor"
              d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.5.55 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .55 3.5 1 1 0 0 1-.25 1Z"
            />
          </svg>
        </div>
      </div>
      <div className={styles.volWhat}>
        <span>Что доступно волонтёру:</span>
        <ul>
          <li>Поток с задней камеры</li>
          <li>Ваш голос</li>
          <li>Имя, телефон, локация</li>
        </ul>
      </div>
      <button className={styles.cancelBtn}>Отменить</button>
    </div>
  );
}
