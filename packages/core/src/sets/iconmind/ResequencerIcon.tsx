import type { IconProps } from "../../shared/types";

export function ResequencerIcon({
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
      <path d="M2 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0m2 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0m6.5-5.5L13 12l-2.5 2.5M16 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0m0 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0m0 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
