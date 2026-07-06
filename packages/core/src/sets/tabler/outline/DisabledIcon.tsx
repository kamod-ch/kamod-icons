import type { IconProps } from "../../../shared/types";

export function DisabledIcon({
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
      <path d="M9 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M11 7v8h4l4 5m-8-9h5m-9 .5a5 5 0 1 0 6 7.5"/>
    </svg>
  );
}
