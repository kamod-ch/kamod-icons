import type { IconProps } from "../../shared/types";

export function FoodChainIcon({
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
      <path d="M2 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0m5-5a4 4 0 1 0 8 0 4 4 0 1 0-8 0"/><path d="M13 7a4 4 0 1 0 8 0 4 4 0 1 0-8 0m-7 9 2-2m6-4 2-2"/>
    </svg>
  );
}
