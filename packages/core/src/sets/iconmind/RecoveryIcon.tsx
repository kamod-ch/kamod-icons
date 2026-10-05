import type { IconProps } from "../../shared/types";

export function RecoveryIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M3 13a3 3 0 0 1 6 0 3 3 0 0 1 6 0l-6 6Zm14 7V8"/><path d="m14 11 3-3 3 3"/>
    </svg>
  );
}
