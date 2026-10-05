import type { IconProps } from "../../shared/types";

export function CircuitIcon({
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
      <path d="M2 17h5V7h6v10h6v-7"/><path d="M6 17a1 1 0 1 0 2 0 1 1 0 1 0-2 0m6-10a1 1 0 1 0 2 0 1 1 0 1 0-2 0m6 3a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
