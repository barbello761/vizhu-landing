import type React from 'react';
import styles from './Logo.module.scss';

type Variant = 'light' | 'dark';

type Props = {
  variant?: Variant;
  withWordmark?: boolean;
  // height in px
  size?: number;
  ariaHidden?: boolean;
};

// Brand mark only — used in compact spots (favicon-like).
const MARK_PATHS = (
  <>
    <path d="M143.54 335.595L164.047 167.797H123.033L143.54 335.595Z" />
    <path d="M175.846 168.442C175.846 201.664 175.846 253.353 175.846 253.353L144.955 187.01L127.379 187.622L136.309 168.442L127.379 149.262L144.955 149.873L175.846 83.5312C175.846 83.5312 175.846 135.22 175.846 168.442Z" />
    <path d="M12.8166 66.512L126.749 183.999L166.811 157.034L12.8166 66.512Z" />
    <path d="M12.8166 270.062L126.749 152.575L166.811 179.54L12.8166 270.062Z" />
    <path d="M143.54 0L164.047 167.797H123.033L143.54 0Z" />
  </>
);

// Full vector logo (mark + ВИЖУ wordmark).
const WORDMARK_PATHS = (
  <>
    <path d="M217.868 229.297V108.146H261.358C283.691 108.146 297.46 119.901 297.46 138.035V138.203C297.46 151.469 288.141 162.803 275.295 165.154V166.161C291.835 168.26 303.673 179.343 303.673 196.05V196.218C303.673 216.704 288.897 229.297 262.03 229.297H217.868ZM259.092 118.305H229.371V161.963H256.489C275.211 161.963 285.874 153.987 285.874 139.966V139.798C285.874 126.533 275.883 118.305 259.092 118.305ZM259.427 171.87H229.371V219.138H260.351C281.424 219.138 291.919 210.575 291.919 195.63V195.462C291.919 180.35 279.997 171.87 259.427 171.87Z" />
    <path d="M321.751 229.297V108.146H333.085V209.567H334.177L404.953 108.146H416.12V229.297H404.785V128.128H403.694L332.918 229.297H321.751Z" />
    <path d="M519.302 162.131H523.752L572.951 108.146H587.224L532.736 166.497L592.345 229.297H577.233L523.752 172.374H519.302V229.297H507.8V172.374H503.35L449.869 229.297H435.009L494.367 166.749L439.71 108.146H454.151L503.35 162.131H507.8V108.146H519.302V162.131Z" />
    <path d="M621.534 230.137C618.511 230.137 616.244 229.633 615.237 229.129V218.803C616.328 219.138 618.427 219.558 621.534 219.558C631.357 219.558 637.402 213.01 642.859 202.095L600.796 108.146H613.222L648.4 189.166H649.408L683.243 108.146H695.165L657.132 195.798C647.98 216.956 640.172 230.137 621.534 230.137Z" />
  </>
);

export function Logo({
  variant = 'dark',
  withWordmark = true,
  size = 36,
  ariaHidden = false,
}: Props) {
  const color = variant === 'light' ? '#ffffff' : '#0D44DC';
  // viewBox switches between "mark only" and "mark + ВИЖУ".
  const viewBox = withWordmark ? '0 0 703 336' : '0 0 200 336';

  return (
    <span
      className={styles.logo}
      data-variant={variant}
      role={ariaHidden ? 'presentation' : 'img'}
      aria-label={ariaHidden ? undefined : 'ВИЖУ — главная страница'}
      aria-hidden={ariaHidden || undefined}
    >
      <svg
        // Inline style beats the global `svg { height: auto }` reset.
        // Without it the SVG collapses to 0 / intrinsic size and disappears.
        //
        // Height routed through `--logo-h` so any parent (e.g. Header,
        // Footer) can override it responsively via media queries without
        // re-rendering React. Falls back to the `size` prop.
        style={
          {
            '--logo-h-default': `${size}px`,
            height: 'var(--logo-h, var(--logo-h-default))',
            width: 'auto',
          } as React.CSSProperties
        }
        viewBox={viewBox}
        fill={color}
        focusable="false"
        aria-hidden="true"
        className={styles.svg}
      >
        {MARK_PATHS}
        {withWordmark && WORDMARK_PATHS}
      </svg>
    </span>
  );
}
