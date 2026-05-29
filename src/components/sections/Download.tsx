import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import styles from './Download.module.scss';

const APP_URL = 'https://app.vizhu.su';

export function Download() {
  return (
    <section id="download" className={styles.section} aria-labelledby="download-title">
      <div className={styles.inner}>
        <Reveal direction="scale">
        <motion.div
          className={styles.card}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.copy}>
            <span className={styles.eyebrow}>Опробуйте сейчас</span>
            <h2 id="download-title">
              ИИ-ассистент и основной<br />
              функционал уже доступны
            </h2>
            <p>
              ВИЖУ — это PWA: ничего не нужно качать из магазинов.
              Откройте сайт, добавьте на главный экран — и приложение
              ведёт себя как нативное, с голосовыми командами и оффлайн-режимом.
            </p>

            <ul className={styles.stores} aria-label="Способы запуска приложения">
              <li>
                <Button asChild variant="secondary" size="lg">
                  <a
                    href={APP_URL}
                    rel="noreferrer noopener"
                    target="_blank"
                    aria-label="Открыть веб-приложение ВИЖУ в новой вкладке"
                  >
                    Открыть приложение
                  </a>
                </Button>
              </li>
              <li>
                <Button asChild variant="outlineLight" size="lg">
                  <a
                    href="#how"
                    aria-label="Узнать, как пользоваться ВИЖУ"
                  >
                    Как пользоваться?
                  </a>
                </Button>
              </li>
            </ul>

            <p className={styles.fineprint}>
              Работает в Safari, Chrome, Firefox, Яндекс.Браузере.
              Полная поддержка VoiceOver и TalkBack — без подписки.
            </p>
          </div>

          <motion.div
            className={styles.qrBlock}
            initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div
              className={styles.qrWrap}
              role="img"
              aria-label={`QR-код со ссылкой на веб-приложение: ${APP_URL}`}
            >
              <QRCodeSVG
                value={APP_URL}
                size={220}
                bgColor="#ffffff"
                fgColor="#0a1140"
                level="M"
                marginSize={2}
              />
            </div>
            <p>
              Наведите камеру телефона —<br />
              откроется <strong>app.vizhu.su</strong>
            </p>
          </motion.div>
        </motion.div>
        </Reveal>

        <Reveal direction="up" delay={0.15}>
        <aside className={`${styles.partner} snap-target`} aria-labelledby="partner-title">
          <div>
            <h3 id="partner-title">Партнёрам и НКО</h3>
            <p>
              Хотите подключить ВИЖУ для своих подопечных или интегрировать
              в собственный сервис? Расскажем про white-label и пресс-кит.
            </p>
          </div>
          <Button asChild variant="ghost" size="md">
            <a
              href="mailto:partners@vizhuapp.ru"
              aria-label="Написать в отдел партнёрских отношений"
            >
              partners@vizhuapp.ru →
            </a>
          </Button>
        </aside>
        </Reveal>
      </div>
    </section>
  );
}
