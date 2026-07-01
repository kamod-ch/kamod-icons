import type { IconProps } from "../../../shared/types";

export function ArrowsUpIcon({
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
      <path d="M17 3v18M4 6l3-3 3 3m10 0-3-3-3 3M7 3v18"/>
    </svg>
  );
}
