import type { IconProps } from "../../shared/types";

export function SurgeLimitIcon({
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
      <path d="M2 8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z"/><path d="M4 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0m6 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0m10-7v14"/>
    </svg>
  );
}
