import type { IconProps } from "../../../shared/types";

export function ZipIcon({
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
      <path d="M16 16V8h2a2 2 0 1 1 0 4h-2m-4-4v8M4 8h4l-4 8h4"/>
    </svg>
  );
}
