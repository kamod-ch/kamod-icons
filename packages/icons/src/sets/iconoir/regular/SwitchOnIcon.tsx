import type { IconProps } from "../../../shared/types";

export function SwitchOnIcon({
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
      <path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/><path stroke="currentColor" strokeWidth="1.5" d="M17 17H7A5 5 0 0 1 7 7h10a5 5 0 0 1 0 10Z"/>
    </svg>
  );
}
