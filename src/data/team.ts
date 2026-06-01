// Team roster from the project deck (рис.2).
// NOTE: tg / max handles below are PLACEHOLDERS derived from names —
// replace with the real Telegram / MAX usernames before publishing.
// Only Даяна's handle (abdllvdn) is confirmed.

export type Member = {
  name: string;        // ФИ
  role: string;        // роль
  vk?: string;          // VK username (without vk.com/)
  tg?: string;          // Telegram username (without @)
  max?: string;         // MAX username
  email?: string;      // e.g. ivanov@vizhuapp.ru
  phone?: string;      // digits with +, e.g. +79991234567
  // Drop a photo into /public/assets/team/ and set the path here, e.g.
  // photo: '/assets/team/bazhenov.jpg'. While empty, a clean initials
  // placeholder is shown automatically.
  photo?: string;
};

// NOTE: email / phone for everyone except Даяна are placeholders — replace.
export const team: Member[] = [
  { name: 'Абдуллаева Даяна',  role: 'Лидер проекта · Аналитик', vk: 'abdllvdn',     tg: 'abdllvdn',         max: 'https://max.ru/u/f9LHodD0cOIGHIwD4fYzPiy4ZLGRuonAcNztgquZnajX1Um92VWWR_kKsjM',        email: 'dayanaab@yandex.ru', phone: '+79185776166', photo: '/assets/photos/abdllvdn.jpg' },
  { name: 'Чубухчиев Борис',   role: 'Разработчик',              vk: 'borischubuh',          tg: 'bosicoChan', max: '',                email: 'borischubuhchiev@mail.ru',  phone: '', photo: '/assets/photos/barb.jpg' },
  { name: 'Ильинов Никита',    role: 'UI/UX Дизайнер',           vk: 'morsssovski',          tg: 'Morssssss', max: '',                email: 'morsssovski@gmail.com', phone: '', photo: '/assets/photos/nik.jpg' },
  { name: 'Ермолов Дмитрий',   role: 'Аналитик',                 vk: 'luchshenepridumat',          tg: 'dimarikept',  max: '', email: 'ermolovforwork@gmail.com', phone: '+79198981381', photo: '/assets/photos/dimas.jpg' },
];
