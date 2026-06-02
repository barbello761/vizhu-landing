import { VkIcon, TelegramIcon, MaxIcon } from '../ui/BrandIcon';
import { Reveal } from '../ui/Reveal';
import styles from './Contacts.module.scss';

const lead = {
  role: 'Руководитель проекта',
  name: 'Абдуллаева Даяна Абдулазизовна',
  phoneText: '+7 (918) 577-61-66',
  phoneHref: 'tel:+79185776166',
  email: 'dayanaab@yandex.ru',
  vk: 'https://vk.com/abdllvdn',
  tg: 'https://t.me/abdllvdn',
  max: 'https://max.ru/u/f9LHodD0cOIGHIwD4fYzPiy4ZLGRuonAcNztgquZnajX1Um92VWWR_kKsjM',
};

const socials = [
  { href: lead.tg,  label: 'Telegram',  Icon: TelegramIcon },
  { href: lead.vk,  label: 'ВКонтакте', Icon: VkIcon },
  { href: lead.max, label: 'MAX',       Icon: MaxIcon },
];

export function Contacts() {
  return (
    <section id="contacts" className={styles.section} aria-labelledby="contacts-title">
      <Reveal direction="up" className={styles.inner}>
        <h2 id="contacts-title" className={styles.title}>Контактная информация</h2>

        <p className={styles.name}>{lead.name}</p>
        <p className={styles.role}>{lead.role}</p>

        <div className={styles.lines}>
          <a href={lead.phoneHref}>{lead.phoneText}</a>
          <a href={`mailto:${lead.email}`}>{lead.email}</a>
        </div>

        <ul className={styles.socials} aria-label="Социальные сети руководителя">
          {socials.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${label} — Абдуллаева Даяна`}
              >
                <Icon size={20} />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
