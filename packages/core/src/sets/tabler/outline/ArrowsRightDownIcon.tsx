import type { IconProps } from "../../../shared/types";

export function ArrowsRightDownIcon({
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
      <path d="m3 17 4 4 4-4"/><path d="M7 21V10a3 3 0 0 1 3-3h11"/><path d="m17 11 4-4-4-4"/>
    </svg>
  );
}
