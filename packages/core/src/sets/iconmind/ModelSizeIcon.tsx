import type { IconProps } from "../../shared/types";

export function ModelSizeIcon({
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
      <path d="m10 3 7 7-7 7-7-7Zm8 11 3.5 3.5L18 21l-3.5-3.5Z"/>
    </svg>
  );
}
