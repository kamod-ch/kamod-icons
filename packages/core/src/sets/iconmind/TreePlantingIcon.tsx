import type { IconProps } from "../../shared/types";

export function TreePlantingIcon({
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
      <path d="M12 17V9m0 0c0-4-3-6-7-6 0 4 3 6 7 6m0 3c0-4 3-6 7-6 0 4-3 6-7 6m-7 9a7 7 0 0 1 14 0"/>
    </svg>
  );
}
