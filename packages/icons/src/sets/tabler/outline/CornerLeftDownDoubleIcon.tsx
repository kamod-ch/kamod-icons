import type { IconProps } from "../../../shared/types";

export function CornerLeftDownDoubleIcon({
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
      <path d="M18 4h-6a3 3 0 0 0-3 3v7"/><path d="m13 10-4 4-4-4m8 5-4 4-4-4"/>
    </svg>
  );
}
