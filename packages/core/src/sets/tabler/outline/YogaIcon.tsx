import type { IconProps } from "../../../shared/types";

export function YogaIcon({
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
      <path d="M4 20h4l1.5-3m7.5 3-1-5h-5l1-7"/><path d="m4 10 4-1 4-1 4 1.5 4 1.5m-9.993-6a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
