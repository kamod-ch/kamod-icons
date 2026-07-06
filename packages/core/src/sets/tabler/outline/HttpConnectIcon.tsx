import type { IconProps } from "../../../shared/types";

export function HttpConnectIcon({
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
      <path d="M7 10a2 2 0 1 0-4 0v4a2 2 0 1 0 4 0m10 2V8l4 8V8m-9 0a2 2 0 0 1 2 2v4a2 2 0 1 1-4 0v-4a2 2 0 0 1 2-2"/>
    </svg>
  );
}
