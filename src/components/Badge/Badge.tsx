import clsx from "clsx";
import styles from "./Badge.module.scss";

export type BadgeColor =
  | "danger"
  | "primary"
  | "success"
  | "warning"
  | "neutral";
export type BadgePosition =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left";
export type BadgeOverlap = "square" | "circle";

export interface BadgeProps {
  label?: string | number;
  color?: BadgeColor;
  position?: BadgePosition;
  overlap?: BadgeOverlap;
  children: React.ReactNode;
  className?: string;
}

export function Badge({
  label,
  color = "primary",
  position = "top-right",
  overlap = "square",
  children,
  className,
}: BadgeProps) {
  return (
    <span className={clsx(styles.root, className)}>
      {children}
      <span
        className={styles.indicator}
        data-color={color}
        data-position={position}
        data-overlap={overlap}
        data-dot={label === undefined || undefined}
        aria-label={label !== undefined ? String(label) : undefined}
      >
        {label}
      </span>
    </span>
  );
}
