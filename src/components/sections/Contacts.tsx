import { QRCodeSVG } from 'qrcode.react';
import { Reveal } from '../ui/Reveal';
import { VkIcon, TelegramIcon, MaxIcon } from '../ui/BrandIcon';
import styles from './Contacts.module.scss';

// Project lead (руководитель проекта) per ТЗ рис.3.
const lead = {
  role: 'Руководитель проекта',
  name: 'Абдуллаева Даяна Абдулазизовна',
  phoneText: '+7 918 577 61 66',
  phoneHref: 'tel:+79185776166',
  email: 'dayanaab@yandex.ru',
  vk: 'https://vk.com/abdllvdn',
  tg: 'https://t.me/abdllvdn',
  max: 'https://max.ru/u/f9LHodD0cOIGHIwD4fYzPiy4ZLGRuonAcNztgquZnajX1Um92VWWR_kKsjM',
  // Drop a portrait into /public/assets/team/ and set the path here,
  // e.g. photo: '/assets/team/dayana.jpg'. Empty → initials placeholder.
  photo: '/assets/photos/abdllvdn.jpg',
};

const socials = [
  { href: lead.vk,  label: 'ВКонтакте', Icon: VkIcon },
  { href: lead.tg,  label: 'Telegram',  Icon: TelegramIcon },
  { href: lead.max, label: 'MAX',       Icon: MaxIcon },
];

export function Contacts() {
  return (
    <section id="contacts" className={styles.section} aria-labelledby="contacts-title">
      <div className={styles.inner}>
        <Reveal as="header" className={styles.header}>
          <span className={styles.eyebrow}>Контакты</span>
          <h2 id="contacts-title">Контактная информация</h2>
        </Reveal>

        <Reveal direction="up" className={styles.cardWrap}>
          <div className={styles.card}>
            {/* Left: the person — avatar + identity + details */}
            <div className={styles.info}>
              <div className={styles.head}>
                <div className={styles.avatar}>
                  {lead.photo ? (
                    <img src={lead.photo} alt={`Фото: ${lead.name}`} loading="lazy" />
                  ) : (
                    <span className={styles.initials} aria-hidden="true">АД</span>
                  )}
                </div>
                <div className={styles.ident}>
                  <span className={styles.role}>{lead.role}</span>
                  <h3 className={styles.name}>{lead.name}</h3>
                </div>
              </div>

              <dl className={styles.list}>
                <div className={styles.row}>
                  <dt>Телефон</dt>
                  <dd><a href={lead.phoneHref}>{lead.phoneText}</a></dd>
                </div>
                <div className={styles.row}>
                  <dt>Почта</dt>
                  <dd><a href={`mailto:${lead.email}`}>{lead.email}</a></dd>
                </div>
              </dl>

              <ul className={styles.socials} aria-label="Социальные сети руководителя">
                {socials.map(({ href, label, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${label} — Абдуллаева Даяна`}
                    >
                      <Icon size={22} />
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: separate QR panel — kept away from the portrait */}
            <a
              className={styles.qrPanel}
              href={lead.tg}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="QR-код: написать руководителю в Telegram"
            >
              <span className={styles.qrTitle}>Написать в Telegram</span>
              <span className={styles.qrCode}>
                <QRCodeSVG value={lead.tg} size={176} bgColor="#ffffff" fgColor="#0a1140" level="M" marginSize={2} />
              </span>
              <span className={styles.qrSub}></span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
