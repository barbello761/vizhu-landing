import { QRCodeSVG } from 'qrcode.react';
import { CountUp } from '../ui/CountUp';
import { PhoneMockup } from '../ui/PhoneMockup';
import { ScreenHome, ScreenCamera, ScreenVolunteer } from '../ui/PhoneScreens';
import { Reveal, RevealStagger, RevealItem } from '../ui/Reveal';
import styles from './About.module.scss';

const APP_URL = 'https://app.vizhu.su';

// ===== Информативные плашки =====
const plates = [
  { value: 423_658, suffix: '', label: 'взрослых незрячих и слабовидящих в России', accent: false },
  { value: 24, suffix: '/7', label: 'помощь голосом — днём и ночью, без выходных', accent: true },
  { value: 3, prefix: '< ', suffix: ' сек', label: 'на описание сцены через GigaChat Vision', accent: false },
  { value: 0, prefix: '', suffix: ' ₽', label: 'для пользователей с ИПРА — Premium бесплатно', accent: false },
];

// ===== Функционал в формате фич =====
const features = [
  {
    title: 'AI-описание сцены',
    body: 'Камера + GigaChat Vision расскажут, что вокруг: предметы, текст, обстановка.',
    icon: <path fill="currentColor" d="M12 5a7 7 0 0 1 6.99 6.74L19 12A7 7 0 1 1 12 5Zm0 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />,
  },
  {
    title: 'Распознавание купюр',
    body: 'Все номиналы 10–5000 ₽ за секунду. Ассистент называет сумму голосом.',
    icon: <path fill="currentColor" d="M3 6h18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm9 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />,
  },
  {
    title: 'Чтение текста (OCR)',
    body: 'Печатный и частично рукописный текст — документы, ценники, письма вслух.',
    icon: <path fill="currentColor" d="M4 4h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm2 4h12v2H6V8Zm0 4h12v2H6v-2Zm0 4h8v2H6v-2Z" />,
  },
  {
    title: 'Вызов волонтёра',
    body: 'Видеосвязь со свободным волонтёром в любое время. Очередь — секунды.',
    icon: <path fill="currentColor" d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.5.55 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .55 3.5 1 1 0 0 1-.25 1Z" />,
  },
  {
    title: 'Голосовое управление',
    body: 'Никаких меню: «Что вокруг?», «Прочитай документ», «Сколько денег?».',
    icon: <path fill="currentColor" d="M12 14a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3Zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V21h2v-3.08A7 7 0 0 0 19 11Z" />,
  },
  {
    title: 'История диалогов',
    body: 'Ассистент помнит контекст: можно переспросить, уточнить, перечитать.',
    icon: <path fill="currentColor" d="M13 3a9 9 0 1 0 8.9 10.5l-2-.3A7 7 0 1 1 13 5v3l4-4-4-4v3Zm-1 5v5l4 2 .8-1.4-3.3-1.9V8H12Z" />,
  },
];

// ===== Макеты (3 экрана — поместятся рядом с QR) =====
const mockups = [
  { screen: 'home',      label: 'Главный экран: кнопка «Нажмите и говорите» и быстрые действия.', variant: 'light' as const },
  { screen: 'camera',    label: 'Камера: AI описывает сцену вслух в реальном времени.',          variant: 'dark'  as const },
  { screen: 'volunteer', label: 'Вызов волонтёра: таймер ожидания и кнопка звонка.',             variant: 'light' as const },
];

function renderScreen(s: string) {
  switch (s) {
    case 'home':      return <ScreenHome />;
    case 'camera':    return <ScreenCamera />;
    case 'volunteer': return <ScreenVolunteer />;
    default:          return null;
  }
}

export function About() {
  return (
    <>
      {/* ============ 1. О проекте: интро + плашки ============ */}
      <section id="about" className={styles.section} aria-labelledby="about-title">
        <div className={styles.inner}>
          <Reveal as="header" className={styles.header}>
            <span className={styles.eyebrow}>О проекте</span>
            <h2 id="about-title">Голос вместо зрения — там, где это нужно</h2>
            <p>
              «ВИЖУ» — российский сервис с голосовым AI-ассистентом на базе моделей
              GigaChat и YandexGPT. Помогает незрячим и слабовидящим людям с повседневными
              задачами — круглосуточно, на родном языке и без барьеров.
            </p>
          </Reveal>

          <RevealStagger as="ul" className={styles.plates} ariaLabel="Ключевые факты о проекте" stagger={0.1}>
            {plates.map((p) => (
              <RevealItem as="li" key={p.label} className={styles.plate}>
                <div className={styles.plateInner} data-accent={p.accent || undefined}>
                  <div className={styles.count}>
                    <CountUp
                      to={p.value}
                      prefix={p.prefix ?? ''}
                      suffix={p.suffix ?? ''}
                      ariaLabel={`${p.prefix ?? ''}${p.value.toLocaleString('ru-RU')}${p.suffix ?? ''} — ${p.label}`}
                    />
                  </div>
                  <span>{p.label}</span>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* ============ 2. Возможности: фичи ============ */}
      <section id="features" className={styles.section} data-bg="muted" aria-labelledby="features-title">
        <div className={styles.inner}>
          <Reveal as="header" className={styles.header}>
            <span className={styles.eyebrow}>Возможности</span>
            <h2 id="features-title">Что умеет ВИЖУ</h2>
          </Reveal>

          <RevealStagger as="ul" className={styles.features} ariaLabel="Возможности приложения">
            {features.map((f) => (
              <RevealItem as="li" key={f.title} className={styles.feature}>
                <span className={styles.featureIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22">{f.icon}</svg>
                </span>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* ============ 3. Демонстрация: макеты + QR ============ */}
      <section id="showcase" className={styles.section} data-bg="tint" aria-labelledby="showcase-title">
        <div className={styles.inner}>
          <Reveal as="header" className={styles.header}>
            <span className={styles.eyebrow}>Демонстрация</span>
            <h2 id="showcase-title">Как это выглядит</h2>
          </Reveal>

          <div className={styles.showcaseRow}>
            <RevealStagger as="ul" className={styles.gallery} ariaLabel="Макеты экранов приложения" stagger={0.1}>
              {mockups.map((m) => (
                <RevealItem as="li" key={m.screen} className={styles.galleryItem}>
                  <PhoneMockup size="sm" variant={m.variant} label={m.label}>
                    {renderScreen(m.screen)}
                  </PhoneMockup>
                </RevealItem>
              ))}
            </RevealStagger>

            <Reveal direction="scale" className={styles.qrCard} as="div">
              <span className={styles.qrEyebrow}>Попробуйте сами</span>
              <p>
                ВИЖУ — это PWA: ничего не нужно качать из магазинов. Наведите камеру
                на QR-код или откройте ссылку.
              </p>
              <a
                className={styles.qr}
                href={APP_URL}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Открыть веб-приложение ВИЖУ: ${APP_URL}`}
              >
                <span className={styles.qrCode}>
                  <QRCodeSVG value={APP_URL} size={132} bgColor="#ffffff" fgColor="#0a1140" level="M" marginSize={2} />
                </span>
                <span className={styles.qrLink}>app.vizhu.su →</span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
