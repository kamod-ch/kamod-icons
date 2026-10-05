import type { IconProps } from "../../shared/types";

export function ShareIcon({
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
      <path d="M6 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0m8-8a2 2 0 1 0 4 0 2 2 0 1 0-4 0m0 16a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-4.5-9.5 5-5m-5 8 5 5"/>
    </svg>
  );
}
