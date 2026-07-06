import type { IconProps } from "../../../shared/types";

export function ZodiacPiscesIcon({
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
      <path d="M5 3a21 21 0 0 1 0 18M19 3a21 21 0 0 0 0 18M5 12h14"/>
    </svg>
  );
}
