import type { IconProps } from "../../shared/types";

export function MouseIcon({
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
      <path d="M7 7a5 5 0 0 1 5-5 5 5 0 0 1 5 5v10a5 5 0 0 1-5 5 5 5 0 0 1-5-5Zm0 2h10m-5-4v3"/>
    </svg>
  );
}
