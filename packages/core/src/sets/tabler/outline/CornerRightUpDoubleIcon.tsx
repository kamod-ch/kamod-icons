import type { IconProps } from "../../../shared/types";

export function CornerRightUpDoubleIcon({
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
      <path d="M5 19h6a3 3 0 0 0 3-3V9"/><path d="m10 13 4-4 4 4m-8-5 4-4 4 4"/>
    </svg>
  );
}
