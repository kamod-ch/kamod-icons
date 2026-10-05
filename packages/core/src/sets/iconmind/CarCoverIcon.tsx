import type { IconProps } from "../../shared/types";

export function CarCoverIcon({
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
      <path d="M4.5 9.5a7.5 7.5 0 0 1 15 0m-15 0h15M4.5 18v-3L7 12.5h7.5L17 15h2.5v3"/><path d="M7 18.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m8 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
