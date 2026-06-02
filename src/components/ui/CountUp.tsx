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
  // once:false — re-runs the count-up every time the number scrolls into view.
  const inView = useInView(ref, { amount: 0.6 });
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
    if (reduced) {
      value.set(to);
      return;
    }
    if (!inView) {
      // Reset so it spins up again the next time it scrolls into view.
      value.set(0);
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
