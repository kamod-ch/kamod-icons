import type { IconProps } from "../../../shared/types";

export function ArrowsSplitIcon({
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
      <path d="M21 17h-8l-3.5-5H3m18-5h-8l-3.495 5"/><path d="m18 10 3-3-3-3m0 16 3-3-3-3"/>
    </svg>
  );
}
