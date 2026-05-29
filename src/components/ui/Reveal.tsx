import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ElementType, ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';

type Props = {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  amount?: number;
  as?: ElementType;
  className?: string;
  id?: string;
};

const OFFSETS: Record<Direction, { x?: number; y?: number; scale?: number }> = {
  up:    { y:  40 },
  down:  { y: -40 },
  left:  { x:  40 },
  right: { x: -40 },
  scale: { scale: 0.92 },
  fade:  {},
};

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  distance,
  once = true,
  amount = 0.25,
  as = 'div',
  className,
  id,
}: Props) {
  const reduced = useReducedMotion();
  const off = OFFSETS[direction];

  const variants: Variants = {
    hidden: reduced
      ? { opacity: 0 }
      : {
          opacity: 0,
          x: off.x ? (distance ?? off.x) * Math.sign(off.x) : 0,
          y: off.y ? (distance ?? off.y) * Math.sign(off.y) : 0,
          scale: off.scale ?? 1,
        },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: reduced ? 0 : duration,
        delay: reduced ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  return (
    <MotionTag
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}

// Container that staggers its children.
// Use with <RevealItem> inside.
type StaggerProps = {
  children: ReactNode;
  stagger?: number;
  delayChildren?: number;
  className?: string;
  as?: ElementType;
  amount?: number;
  ariaLabel?: string;
};

export function RevealStagger({
  children,
  stagger = 0.09,
  delayChildren = 0,
  className,
  as = 'div',
  amount = 0.2,
  ariaLabel,
}: StaggerProps) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      aria-label={ariaLabel}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden:  {},
        visible: {
          transition: {
            staggerChildren: reduced ? 0 : stagger,
            delayChildren:   reduced ? 0 : delayChildren,
          },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}

type ItemProps = {
  children: ReactNode;
  direction?: Direction;
  className?: string;
  as?: ElementType;
};

export function RevealItem({
  children,
  direction = 'up',
  className,
  as = 'div',
}: ItemProps) {
  const reduced = useReducedMotion();
  const off = OFFSETS[direction];

  const variants: Variants = {
    hidden: reduced
      ? { opacity: 0 }
      : { opacity: 0, x: off.x ?? 0, y: off.y ?? 0, scale: off.scale ?? 1 },
    visible: {
      opacity: 1, x: 0, y: 0, scale: 1,
      transition: { duration: reduced ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;
  return (
    <MotionTag className={className} variants={variants}>
      {children}
    </MotionTag>
  );
}
