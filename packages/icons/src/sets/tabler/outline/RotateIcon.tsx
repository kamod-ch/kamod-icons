import type { IconProps } from "../../../shared/types";

export function RotateIcon({
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
      <path d="M19.95 11a8 8 0 1 0-.5 4m.5 5v-5h-5"/>
    </svg>
  );
}
