import type { IconProps } from "../../../shared/types";

export function BrightnessUpIcon({
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
      <path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0m3-7V3m5 4 1.4-1.4M19 12h2m-4 5 1.4 1.4M12 19v2m-5-4-1.4 1.4M6 12H4m3-5L5.6 5.6"/>
    </svg>
  );
}
