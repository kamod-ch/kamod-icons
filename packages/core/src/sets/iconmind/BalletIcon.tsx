import type { IconProps } from "../../shared/types";

export function BalletIcon({
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
      <path d="M3 18c0-6 3-9 7-9 5 0 9 3.5 10 7 .5 1.5 0 2-2 2Zm7-9C9 6 7 5 5 4"/>
    </svg>
  );
}
