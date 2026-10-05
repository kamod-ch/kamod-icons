import type { IconProps } from "../../shared/types";

export function FruitBowlIcon({
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
      <path d="M4 12h16c0 5-4 9-8 9s-8-4-8-9"/><path d="M6 9a3 3 0 1 0 6 0 3 3 0 1 0-6 0m9 3c0-4 2.5-7 5-7 0 4-2.5 7-5 7"/>
    </svg>
  );
}
