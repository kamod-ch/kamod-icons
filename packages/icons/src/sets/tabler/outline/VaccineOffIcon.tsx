import type { IconProps } from "../../../shared/types";

export function VaccineOffIcon({
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
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="m17 3 4 4m-2-2-4.5 4.5m-3-3 6 6m-1-1-.5.5m-2 2-4 4H6v-4l4-4m2-2 .5-.5m-5 5L9 14m-6 7 3-3M3 3l18 18"/>
    </svg>
  );
}
