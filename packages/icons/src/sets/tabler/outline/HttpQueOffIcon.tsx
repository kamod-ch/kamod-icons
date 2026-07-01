import type { IconProps } from "../../../shared/types";

export function HttpQueOffIcon({
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
      <path d="M5 8a2 2 0 0 1 2 2v4a2 2 0 1 1-4 0v-4a2 2 0 0 1 2-2m1 7 1 1m14-8h-4v8h4m-4-4h2.5M10 10v4a2 2 0 1 0 4 0m0-4V8M3 3l18 18"/>
    </svg>
  );
}
