import type { IconProps } from "../../../shared/types";

export function NintendoSwitchIcon({
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
      <path stroke="currentColor" d="M2 17V7a4 4 0 0 1 4-4h3.9a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H6a4 4 0 0 1-4-4Z"/><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6.5 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2m11 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/><path stroke="currentColor" d="M22 17V7a4 4 0 0 0-4-4h-3.9a.6.6 0 0 0-.6.6v16.8a.6.6 0 0 0 .6.6H18a4 4 0 0 0 4-4Z"/>
    </svg>
  );
}
