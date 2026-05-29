import type { ReactNode } from 'react';
import styles from './PhoneMockup.module.scss';

type Props = {
  children: ReactNode;
  label?: string;
  tilt?: 'left' | 'right' | 'none';
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
};

// iPhone-style frame. Screen content is fully decorative
// — descriptive text always lives outside in real copy.
export function PhoneMockup({
  children,
  label,
  tilt = 'none',
  variant = 'light',
  size = 'md',
}: Props) {
  return (
    <div
      className={styles.wrapper}
      data-tilt={tilt}
      data-variant={variant}
      data-size={size}
      role="img"
      aria-label={label ?? 'Демонстрационный экран приложения ВИЖУ'}
    >
      <div className={styles.frame} aria-hidden="true">
        <div className={styles.notch} />
        <div className={styles.screen}>
          <div className={styles.statusBar}>
            <span className={styles.statusTime}>9:41</span>
            <span className={styles.statusIcons}>
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.dot} />
            </span>
          </div>
          <div className={styles.content}>{children}</div>
        </div>
        <div className={styles.sideBtn} data-pos="top-left" />
        <div className={styles.sideBtn} data-pos="mid-left" />
        <div className={styles.sideBtn} data-pos="bot-left" />
        <div className={styles.sideBtn} data-pos="right" />
      </div>
    </div>
  );
}
