import type { IconProps } from "../../shared/types";

export function HumanLoopIcon({
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
      <path d="M16 5.07a8 8 0 1 1-8 0"/><path d="M5 4h3v3m2 3a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-1.5 7a3.5 3.5 0 0 1 7 0"/>
    </svg>
  );
}
