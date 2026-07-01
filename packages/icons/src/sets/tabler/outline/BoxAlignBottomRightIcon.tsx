import type { IconProps } from "../../../shared/types";

export function BoxAlignBottomRightIcon({
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
      <path d="M19 13h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1m1-4v.01M20 4v.01M15 4v.01M9 4v.01M9 20v.01M4 4v.01M4 9v.01M4 15v.01M4 20v.01"/>
    </svg>
  );
}
