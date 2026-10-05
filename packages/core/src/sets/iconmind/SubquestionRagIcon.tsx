import type { IconProps } from "../../shared/types";

export function SubquestionRagIcon({
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
      <path d="M4 7a4 4 0 1 1 4 4m-1 4.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m7.5-2A2.5 2.5 0 1 1 17 16m-1 3.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
