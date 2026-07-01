import type { IconProps } from "../../../shared/types";

export function HttpConnectOffIcon({
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
      <path d="M7 10a2 2 0 1 0-4 0v4a2 2 0 1 0 4 0m10-1V8l4 8V8m-7 6a2 2 0 1 1-4 0v-4m2-2a2 2 0 0 1 2 2M3 3l18 18"/>
    </svg>
  );
}
