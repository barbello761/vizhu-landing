import { Slot } from '@radix-ui/react-slot';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import styles from './Button.module.scss';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outlineLight';
type Size = 'md' | 'lg';

type Props = ComponentPropsWithoutRef<'button'> & {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
  iconLeading?: ReactNode;
  iconTrailing?: ReactNode;
};

export function Button({
  variant = 'primary',
  size = 'md',
  asChild = false,
  iconLeading,
  iconTrailing,
  children,
  className,
  ...rest
}: Props) {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      className={[styles.btn, styles[variant], styles[size], className]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      <span className={styles.inner}>
        {iconLeading && (
          <span className={styles.icon} aria-hidden="true">
            {iconLeading}
          </span>
        )}
        <span>{children}</span>
        {iconTrailing && (
          <span className={styles.icon} aria-hidden="true">
            {iconTrailing}
          </span>
        )}
      </span>
    </Comp>
  );
}
