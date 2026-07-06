import type { IconProps } from "../../shared/types";

export function BatteryPlusIcon({
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
      <path d="M10 9v6m2.543-9H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.605M22 14v-4M7 12h6m-5.394 6H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.606"/>
    </svg>
  );
}
