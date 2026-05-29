import * as Accordion from '@radix-ui/react-accordion';
import { Reveal } from '../ui/Reveal';
import styles from './FAQ.module.scss';

const items = [
  {
    q: 'Сколько стоит приложение?',
    a: 'Базовые функции — бесплатно навсегда. Premium стоит 290 ₽ в месяц, но при включении ВИЖУ в реестр СФР Premium становится бесплатным для пользователей с ИПРА.',
  },
  {
    q: 'Какие модели ИИ используете?',
    a: 'GigaChat Vision (Сбер) и YandexGPT для понимания текста и сцены, Yandex SpeechKit и Сбер SmartSpeech — для голосового интерфейса. Всё работает на российской инфраструктуре.',
  },
  {
    q: 'Сохраняется ли приватность?',
    a: 'Снимки сцены не сохраняются и не передаются третьим лицам. Голосовая обработка проходит шифрованно. Соответствуем 152-ФЗ и требованиям Минцифры.',
  },
  {
    q: 'Можно ли использовать без интернета?',
    a: 'Базовые функции — да: офлайн-OCR появится в Q1 2027, а простое распознавание купюр уже работает локально. Полные возможности AI требуют подключения.',
  },
  {
    q: 'Поддерживаете ли VoiceOver и TalkBack?',
    a: 'Да. Приложение полностью озвучивает скринридер, поддерживает крупный шрифт, регулировку скорости речи и темную тему с высоким контрастом.',
  },
  {
    q: 'Как стать волонтёром?',
    a: 'Зарегистрируйтесь через Добро.рф и подайте заявку в чате @vizhuapp_help. Достаточно 1 часа в неделю — этого хватит, чтобы помочь 5–7 людям.',
  },
];

export function FAQ() {
  return (
    <section id="faq" className={styles.section} aria-labelledby="faq-title">
      <div className={styles.inner}>
        <Reveal as="header" direction="left" className={styles.header}>
          <span className={styles.eyebrow}>FAQ</span>
          <h2 id="faq-title">Частые вопросы</h2>
          <p>
            Если ответа здесь нет — пишите <a href="mailto:hello@vizhuapp.ru">hello@vizhuapp.ru</a>.
            Отвечаем в течение 24 часов.
          </p>
        </Reveal>

        <Reveal direction="right" className={styles.rootWrap}>
        <Accordion.Root type="single" collapsible className={styles.root}>
          {items.map((item, i) => (
            <Accordion.Item
              key={item.q}
              value={`item-${i}`}
              className={styles.item}
            >
              <Accordion.Header asChild>
                <h3>
                  <Accordion.Trigger className={styles.trigger}>
                    <span>{item.q}</span>
                    <span className={styles.chev} aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="20" height="20">
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m6 9 6 6 6-6"
                        />
                      </svg>
                    </span>
                  </Accordion.Trigger>
                </h3>
              </Accordion.Header>
              <Accordion.Content className={styles.content}>
                <p>{item.a}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
        </Reveal>
      </div>
    </section>
  );
}
