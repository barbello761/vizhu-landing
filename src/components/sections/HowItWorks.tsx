import { motion, useReducedMotion } from 'framer-motion';
import { PhoneMockup } from '../ui/PhoneMockup';
import {
  ScreenHome,
  ScreenCamera,
  ScreenChat,
  ScreenVolunteer,
} from '../ui/PhoneScreens';
import { Reveal } from '../ui/Reveal';
import styles from './HowItWorks.module.scss';

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

type Step = {
  n: string;
  title: string;
  body: string;
  screen: 'home' | 'camera' | 'chat' | 'volunteer';
  label: string;
};

const steps: Step[] = [
  {
    n: '01',
    title: 'Нажимаете большую кнопку и говорите',
    body: 'Никаких меню и жестов. «Что вокруг?», «Прочитай документ», «Это сколько денег?» — голосом, на естественном русском.',
    screen: 'home',
    label: 'Главный экран с большой синей кнопкой и быстрыми действиями.',
  },
  {
    n: '02',
    title: 'AI описывает сцену за 3 секунды',
    body: 'Камера + GigaChat Vision. Объясняет, что и где находится, читает ценники, ярлыки и подсказывает направление.',
    screen: 'camera',
    label: 'Экран камеры с реалтайм-описанием сцены: «Перед вами кухня. На столешнице справа — белая кружка».',
  },
  {
    n: '03',
    title: 'Диалог сохраняется в истории',
    body: 'Голосовой ассистент помнит контекст разговора. Можно уточнить, попросить пересчитать, перечитать абзац.',
    screen: 'chat',
    label: 'Экран чата с историей диалога о квитанции ЖКХ.',
  },
  {
    n: '04',
    title: 'Если AI бессилен — соединяем с волонтёром',
    body: 'Видеозвонок свободному волонтёру из базы 1 249+ человек. Среднее время ожидания — 8 секунд.',
    screen: 'volunteer',
    label: 'Экран ожидания волонтёра с таймером 00:08 и кнопкой звонка.',
  },
];

function renderScreen(s: Step['screen']) {
  switch (s) {
    case 'home':      return <ScreenHome />;
    case 'camera':    return <ScreenCamera />;
    case 'chat':      return <ScreenChat />;
    case 'volunteer': return <ScreenVolunteer />;
  }
}

export function HowItWorks() {
  const reduced = useReducedMotion();
  return (
    <section id="how" className={styles.section} aria-labelledby="how-title">
      <div className={styles.inner}>
        <Reveal as="header" className={styles.header}>
          <span className={styles.eyebrow}>Как работает</span>
          <h2 id="how-title">Четыре шага — от голоса до ответа</h2>
          <p>
            Каждый сценарий доступен одним голосовым нажатием. Интерфейс
            оптимизирован для VoiceOver, TalkBack и людей с разной остротой зрения.
          </p>
        </Reveal>

        <ol className={styles.steps}>
          {steps.map((step, i) => {
            const fromLeft = i % 2 === 0;
            return (
              <li className={`${styles.step} snap-target`} data-i={i} key={step.n}>
                <motion.div
                  className={styles.copy}
                  initial={{ opacity: 0, x: reduced ? 0 : (fromLeft ? -40 : 40) }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.8, ease: EASE }}
                >
                  <span className={styles.number}>{step.n}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </motion.div>
                <motion.div
                  className={styles.visual}
                  initial={{ opacity: 0, scale: 0.86, y: 40 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
                >
                  <PhoneMockup
                    size="sm"
                    tilt={i % 2 === 0 ? 'right' : 'left'}
                    variant={step.screen === 'camera' ? 'dark' : 'light'}
                    label={step.label}
                  >
                    {renderScreen(step.screen)}
                  </PhoneMockup>
                </motion.div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
