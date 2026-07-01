import type { IconProps } from "../../../shared/types";

export function BrightnessIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0m9-9v18m0-12 4.65-4.65M12 14.3l7.37-7.37M12 19.6l8.85-8.85"/>
    </svg>
  );
}
