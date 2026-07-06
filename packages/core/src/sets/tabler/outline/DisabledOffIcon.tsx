import type { IconProps } from "../../../shared/types";

export function DisabledOffIcon({
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
      <path d="M11 7a2 2 0 1 0-2-2m2 6v4h4l4 5m-4-9h1m-9 .5a5 5 0 1 0 6 7.5M3 3l18 18"/>
    </svg>
  );
}
