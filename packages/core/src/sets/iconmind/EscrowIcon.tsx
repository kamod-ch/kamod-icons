import type { IconProps } from "../../shared/types";

export function EscrowIcon({
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
      <path d="M2.5 12a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0-9 0M7 10.5v3m7-2.5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2Zm2-2a2 2 0 0 1 4 0"/>
    </svg>
  );
}
