import type { IconProps } from "../../../shared/types";

export function CapsuleIcon({
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
      <path d="M6 9a6 6 0 0 1 6-6 6 6 0 0 1 6 6v6a6 6 0 0 1-6 6 6 6 0 0 1-6-6z"/>
    </svg>
  );
}
