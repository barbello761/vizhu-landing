import type { ElementType, ReactNode } from 'react';
import styles from './Container.module.scss';

type Props = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  id?: string;
  ariaLabel?: string;
  ariaLabelledby?: string;
};

export function Container({
  as: Tag = 'div',
  children,
  className,
  id,
  ariaLabel,
  ariaLabelledby,
}: Props) {
  return (
    <Tag
      id={id}
      className={[styles.container, className].filter(Boolean).join(' ')}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
    >
      {children}
    </Tag>
  );
}
