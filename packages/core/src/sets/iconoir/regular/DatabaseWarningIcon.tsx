import type { IconProps } from "../../../shared/types";

export function DatabaseWarningIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20 16v2m0 4.01.01-.011M4 6v6s0 3 7 3 7-3 7-3V6"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11 3c7 0 7 3 7 3s0 3-7 3-7-3-7-3 0-3 7-3m0 18c-7 0-7-3-7-3v-6"/>
    </svg>
  );
}
