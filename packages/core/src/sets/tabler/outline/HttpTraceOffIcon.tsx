import type { IconProps } from "../../../shared/types";

export function HttpTraceOffIcon({
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
      <path d="M3 8h4M5 8v8m5-4h2m2-2a2 2 0 0 0-2-2m-2 2v6m4 0-3-4m6 1v-3a2 2 0 1 1 4 0v6m-4-3h4M3 3l18 18"/>
    </svg>
  );
}
