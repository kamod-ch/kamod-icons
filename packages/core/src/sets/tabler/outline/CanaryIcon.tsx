import type { IconProps } from "../../../shared/types";

export function CanaryIcon({
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
      <path d="M12 20v-2m3-9.99v.01M3 17l8-8V8a4 4 0 1 1 8 0h2l-2 2v1a7 7 0 0 1-13.215 3.223"/>
    </svg>
  );
}
