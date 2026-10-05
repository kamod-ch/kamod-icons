import type { IconProps } from "../../shared/types";

export function MultiAgentIcon({
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
      <path d="M9.9 3.92a4.5 4.5 0 1 1-3.8 0m11.8 8a4.5 4.5 0 1 1-3.8 0"/>
    </svg>
  );
}
