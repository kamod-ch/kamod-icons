import type { IconProps } from "../../../shared/types";

export function CornerRightUpIcon({
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
      <path d="M6 18h6a3 3 0 0 0 3-3V5l-4 4m8 0-4-4"/>
    </svg>
  );
}
