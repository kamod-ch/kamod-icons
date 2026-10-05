import type { IconProps } from "../../shared/types";

export function PuddleIcon({
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
      <path d="m12 4 2.5 2.5a2.5 2.5 0 0 1-5 0ZM3 15a9 3.5 0 1 0 18 0 9 3.5 0 1 0-18 0"/>
    </svg>
  );
}
