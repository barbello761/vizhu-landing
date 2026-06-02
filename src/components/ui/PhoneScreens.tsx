import { Logo } from './Logo';
import styles from './PhoneScreens.module.scss';

// ============= 1. Home: voice assistant ==============
// Mirrors the real app at app.vizhu.su: white page, blue voice card,
// blue quick-action tiles, icon tab bar.
const quickActions = [
  {
    label: 'Что вокруг',
    icon: <path fill="currentColor" d="M12 2l2.4 7.1L22 9.6l-6 4.6 2.3 7.4L12 17.4 5.7 21.6 8 14.2l-6-4.6 7.6-.5L12 2Z" />,
  },
  { label: 'Текст', glyph: 'Аа' },
  { label: 'Купюры', glyph: '₽' },
  {
    label: 'Волонтёр',
    icon: <path fill="currentColor" d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.5.55 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .55 3.5 1 1 0 0 1-.25 1Z" />,
  },
];

const tabs = [
  { label: 'Главная', active: true, icon: <path fill="currentColor" d="M12 3 3 10v10a1 1 0 0 0 1 1h5v-6h6v6h5a1 1 0 0 0 1-1V10l-9-7Z" /> },
  { label: 'История', icon: <path fill="currentColor" d="M13 3a9 9 0 1 0 8.9 10.5l-2-.3A7 7 0 1 1 13 5v3l4-4-4-4v3Zm-1 5v5l4 2 .8-1.4-3.3-1.9V8H12Z" /> },
  { label: 'Помощь', icon: <path fill="currentColor" d="M4 12a8 8 0 0 1 16 0v5a2 2 0 0 1-2 2h-2v-6h2v-1a6 6 0 0 0-12 0v1h2v6H6a2 2 0 0 1-2-2v-5Z" /> },
  { label: 'Профиль', icon: <path fill="currentColor" d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-4 0-7 2-7 5v1h14v-1c0-3-3-5-7-5Z" /> },
];

export function ScreenHome() {
  return (
    <div className={styles.home} aria-hidden="true">
      <header className={styles.appHeader}>
        <Logo variant="dark" size={16} withWordmark />
        <span className={styles.themeBtn}>
          <svg
            viewBox="0 0 24 24"
            width="13"
            height="13"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4" />
          </svg>
        </span>
      </header>

      <div className={styles.heroCard}>
        <span className={styles.heroTitle}>Нажмите и говорите</span>
        <div className={styles.micButton}>
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path
              fill="currentColor"
              d="M12 14a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3Zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V21h2v-3.08A7 7 0 0 0 19 11Z"
            />
          </svg>
        </div>
        <span className={styles.heroHint}>
          «Прочитай документ» · «Что вокруг?» · «Это сколько денег?»
        </span>
      </div>

      <span className={styles.sectionLabel}>Быстрые действия</span>
      <div className={styles.quickGrid}>
        {quickActions.map((a) => (
          <div className={styles.quickCard} key={a.label}>
            <span className={styles.quickLabel}>{a.label}</span>
            <span className={styles.quickIcon}>
              {a.glyph ? (
                a.glyph
              ) : (
                <svg viewBox="0 0 24 24" width="18" height="18">{a.icon}</svg>
              )}
            </span>
          </div>
        ))}
      </div>

      <nav className={styles.tabBar}>
        {tabs.map((t) => (
          <span key={t.label} data-active={t.active || undefined}>
            <svg viewBox="0 0 24 24" width="16" height="16">{t.icon}</svg>
            {t.label}
          </span>
        ))}
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

// ============= 2b. Banknote recognition ==============
export function ScreenMoney() {
  return (
    <div className={styles.camera} aria-hidden="true">
      <div className={styles.cameraFeed} data-kind="money">
        <span className={styles.cameraTag}>● Нейропомощник</span>
        <div className={styles.bill}>
          <span className={styles.billValue}>1000</span>
          <small>билет банка россии</small>
        </div>
        <div className={styles.cameraDialog}>
          <strong>1000 рублей.</strong> Уверенность&nbsp;95%.
        </div>
      </div>
      <div className={styles.cameraControls}>
        <button className={styles.controlBtn} data-kind="undo">↺</button>
        <button className={styles.controlBtn} data-kind="close">✕</button>
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

// ============= 5. History ==============
const historyItems = [
  { result: '5000 ₽', meta: 'Купюры · 12:40' },
  { result: '1000 ₽', meta: 'Купюры · 12:38' },
  { result: 'Квитанция ЖКХ', meta: 'Текст · 11:20' },
  { result: 'Кухня · кружка · часы', meta: 'Что вокруг · 10:05' },
];

export function ScreenHistory() {
  return (
    <div className={styles.history} aria-hidden="true">
      <header className={styles.histHeader}>
        <span className={styles.histBack}>‹</span>
        <span className={styles.histTitle}>История</span>
        <span className={styles.themeBtn}>
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4" />
          </svg>
        </span>
      </header>

      <div className={styles.histSearch}>
        <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true">
          <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm10 3-5-5" />
        </svg>
        <span className={styles.histSearchText}>Поиск по истории</span>
        <span className={styles.histMic}>
          <svg viewBox="0 0 24 24" width="12" height="12">
            <path fill="currentColor" d="M12 14a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3Zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V21h2v-3.08A7 7 0 0 0 19 11Z" />
          </svg>
        </span>
      </div>

      <span className={styles.histDate}>Сегодня</span>

      <div className={styles.histList}>
        {historyItems.map((it) => (
          <div className={styles.histCard} key={it.result + it.meta}>
            <span className={styles.histResult}>{it.result}</span>
            <span className={styles.histMeta}>
              {it.meta}
              <svg viewBox="0 0 24 24" width="11" height="11" aria-hidden="true">
                <path fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M9 7h8v8" />
              </svg>
            </span>
          </div>
        ))}
      </div>

      <nav className={styles.tabBar}>
        <span>
          <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M12 3 3 10v10a1 1 0 0 0 1 1h5v-6h6v6h5a1 1 0 0 0 1-1V10l-9-7Z" /></svg>
          Главная
        </span>
        <span data-active="true">
          <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M13 3a9 9 0 1 0 8.9 10.5l-2-.3A7 7 0 1 1 13 5v3l4-4-4-4v3Zm-1 5v5l4 2 .8-1.4-3.3-1.9V8H12Z" /></svg>
          История
        </span>
        <span>
          <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M4 12a8 8 0 0 1 16 0v5a2 2 0 0 1-2 2h-2v-6h2v-1a6 6 0 0 0-12 0v1h2v6H6a2 2 0 0 1-2-2v-5Z" /></svg>
          Помощь
        </span>
        <span>
          <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-4 0-7 2-7 5v1h14v-1c0-3-3-5-7-5Z" /></svg>
          Профиль
        </span>
      </nav>
    </div>
  );
}
