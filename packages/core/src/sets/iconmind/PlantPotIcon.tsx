import type { IconProps } from "../../shared/types";

export function PlantPotIcon({
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
      <path d="M8 13v8h8v-8M6 13h12m-6 0c0-4-3-7-6-8 0 4 2 7 6 8m0 0c0-3 3-6 6-7 0 3-2 6-6 7"/>
    </svg>
  );
}
