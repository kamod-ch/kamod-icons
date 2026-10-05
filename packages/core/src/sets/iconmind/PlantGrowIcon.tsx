import type { IconProps } from "../../shared/types";

export function PlantGrowIcon({
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
      <path d="M9 8v12m-6-6c0-3.6 2.4-6 6-6 0 3.6-2.4 6-6 6m7-3c0-3.6 2.4-6 6-6 0 3.6-2.4 6-6 6m9-6v14M16.5 7.5 19 5l2.5 2.5M5 20h8"/>
    </svg>
  );
}
