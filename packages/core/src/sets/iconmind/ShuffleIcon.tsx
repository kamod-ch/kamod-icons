import type { IconProps } from "../../shared/types";

export function ShuffleIcon({
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
      <path d="M3 7h6l9 9h3"/><path d="m18 13 3 3-3 3M3 17h6l9-9h3"/><path d="m18 5 3 3-3 3"/>
    </svg>
  );
}
