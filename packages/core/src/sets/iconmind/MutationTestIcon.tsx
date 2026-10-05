import type { IconProps } from "../../shared/types";

export function MutationTestIcon({
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
      <path d="M3 5h18M3 12h7m3 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0m5 0h3M9 17l2 2 4-4"/>
    </svg>
  );
}
