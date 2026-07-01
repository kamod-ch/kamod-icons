import type { IconProps } from "../../../shared/types";

export function DatabaseIcon({
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
      <path stroke="currentColor" strokeWidth="1.5" d="M5 12v6s0 3 7 3 7-3 7-3v-6"/><path stroke="currentColor" strokeWidth="1.5" d="M5 6v6s0 3 7 3 7-3 7-3V6"/><path stroke="currentColor" strokeWidth="1.5" d="M12 3c7 0 7 3 7 3s0 3-7 3-7-3-7-3 0-3 7-3Z"/>
    </svg>
  );
}
