import type { IconProps } from "../../shared/types";

export function TokenCostIcon({
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
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5 2.5 2.5 0 0 1 17.5 8h-11A2.5 2.5 0 0 1 4 5.5M7 16a5 5 0 1 0 10 0 5 5 0 1 0-10 0"/>
    </svg>
  );
}
