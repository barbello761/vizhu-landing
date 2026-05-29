import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  useReducedMotion,
} from 'framer-motion';
import { useEffect, useRef } from 'react';

type Props = {
  to: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  // 'ru' formats with NBSP grouping (35 000), 'plain' uses no grouping.
  format?: 'ru' | 'plain';
  className?: string;
  ariaLabel?: string;
};

export function CountUp({
  to,
  duration = 1.6,
  decimals = 0,
  prefix = '',
  suffix = '',
  format = 'ru',
  className,
  ariaLabel,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const value = useMotionValue(0);
  const display = useTransform(value, (n) => {
    const rounded =
      decimals > 0 ? n.toFixed(decimals) : Math.round(n).toString();
    if (format === 'plain') return `${prefix}${rounded}${suffix}`;
    const [int, frac] = rounded.replace('.', ',').split(',');
    const formattedInt = int.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return `${prefix}${formattedInt}${frac ? ',' + frac : ''}${suffix}`;
  });

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      value.set(to);
      return;
    }
    const controls = animate(value, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [inView, to, duration, reduced, value]);

  return (
    <span
      ref={ref}
      className={className}
      aria-label={ariaLabel ?? `${prefix}${to.toLocaleString('ru-RU')}${suffix}`}
    >
      <motion.span aria-hidden="true">{display}</motion.span>
    </span>
  );
}
