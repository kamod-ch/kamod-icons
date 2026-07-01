import type { IconProps } from "../../shared/types";

export function BatteryWarningIcon({
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
      <path d="M10 17h.01M10 7v6m4-7h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2m8-4v-4M6 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2"/>
    </svg>
  );
}
