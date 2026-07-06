import type { IconProps } from "../../../shared/types";

export function ArrowCapsuleIcon({
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
      <path d="M18 15a6 6 0 1 1-12 0V9a6 6 0 1 1 12 0v2"/><path d="m15 8 3 3 3-3"/>
    </svg>
  );
}
