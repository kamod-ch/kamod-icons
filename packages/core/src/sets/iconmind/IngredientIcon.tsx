import type { IconProps } from "../../shared/types";

export function IngredientIcon({
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
      <path d="M6 14h10m0 0a5 5 0 0 1-10 0m2 0a3 3 0 0 1 6 0m2 0 5-5"/>
    </svg>
  );
}
