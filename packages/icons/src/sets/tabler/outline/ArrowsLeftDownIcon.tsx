import type { IconProps } from "../../../shared/types";

export function ArrowsLeftDownIcon({
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
      <path d="M7 3 3 7l4 4"/><path d="M3 7h11a3 3 0 0 1 3 3v11"/><path d="m13 17 4 4 4-4"/>
    </svg>
  );
}
