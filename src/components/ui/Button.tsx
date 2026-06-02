import { Slot, Slottable } from '@radix-ui/react-slot';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import styles from './Button.module.scss';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outlineLight' | 'light';
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
  // Slottable lets the consumer's element (e.g. <a>) receive the .btn class
  // directly, so the WHOLE button area is the link — not just the text.
  return (
    <Comp
      className={[styles.btn, styles[variant], styles[size], className]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {iconLeading && (
        <span className={styles.icon} aria-hidden="true">{iconLeading}</span>
      )}
      <Slottable>{children}</Slottable>
      {iconTrailing && (
        <span className={styles.icon} aria-hidden="true">{iconTrailing}</span>
      )}
    </Comp>
  );
}
