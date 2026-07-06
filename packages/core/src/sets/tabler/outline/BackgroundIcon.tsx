import type { IconProps } from "../../../shared/types";

export function BackgroundIcon({
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
      <path d="m4 8 4-4m6 0L4 14m0 6L20 4m0 6L10 20m10-4-4 4"/>
    </svg>
  );
}
