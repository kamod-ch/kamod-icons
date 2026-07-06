import type { IconProps } from "../../../shared/types";

export function ArrowsDoubleNeSwIcon({
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
      <path d="M3 14 14 3m-4 0h4v4m-4 10v4h4m7-11L10 21"/>
    </svg>
  );
}
