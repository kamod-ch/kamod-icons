import type { IconProps } from "../../shared/types";

export function WaterPlantIcon({
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
      <path d="M8 15v6h8v-6Zm4-6v6m0-2c-3 0-5-2-5-5 3 0 5 2 5 5m5-7a1 1 0 1 0 2 0 1 1 0 1 0-2 0m2 3a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
