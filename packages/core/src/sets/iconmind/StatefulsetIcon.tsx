import type { IconProps } from "../../shared/types";

export function StatefulsetIcon({
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
      <path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z"/><path d="M3.5 11a2 2 0 1 0 4 0 2 2 0 1 0-4 0m6.5 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0m6.5 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0M6 16h12"/>
    </svg>
  );
}
