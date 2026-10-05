import type { IconProps } from "../../shared/types";

export function HoneypotAiIcon({
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
      <path d="M5 8v12h14V8M4 5h16"/><path d="M10 14a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
