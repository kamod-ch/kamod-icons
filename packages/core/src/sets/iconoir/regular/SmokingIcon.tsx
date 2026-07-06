import type { IconProps } from "../../../shared/types";

export function SmokingIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 19v3m0-6c0-1-1-2-3-2h-1a3 3 0 0 1-3-3V8.5A2.5 2.5 0 0 1 13.5 6v0h.5m8 10c0-4.5-2-5.5-4-6 2-.5 4-1 4-4s-2.5-4-4-4m4 17v3"/><rect x="2" y="19" stroke="currentColor" strokeWidth="1.5" rx=".6"/>
    </svg>
  );
}
