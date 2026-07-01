import type { IconProps } from "../../../shared/types";

export function ArrowsUpRightIcon({
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
      <path d="m17 21 4-4-4-4"/><path d="M21 17H10a3 3 0 0 1-3-3V3"/><path d="M11 7 7 3 3 7"/>
    </svg>
  );
}
