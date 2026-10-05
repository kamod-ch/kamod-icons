import type { IconProps } from "../../shared/types";

export function SelfHealIcon({
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
      <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"/><path d="M11 4.5 8.5 7l3 3m1 3a2 2 0 0 1 2-2H17a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-2.5a2 2 0 0 1-2-2"/>
    </svg>
  );
}
