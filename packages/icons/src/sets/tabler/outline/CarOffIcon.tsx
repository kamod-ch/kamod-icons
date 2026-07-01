import type { IconProps } from "../../../shared/types";

export function CarOffIcon({
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
      <path d="M5 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0m10.584-1.412a2 2 0 0 0 2.828 2.83"/><path d="M5 17H3v-6l2-5h1m4 0h4l4 5h1a2 2 0 0 1 2 2v4m-6 0H9m-6-6h8m4 0h3m-6-3V6M3 3l18 18"/>
    </svg>
  );
}
