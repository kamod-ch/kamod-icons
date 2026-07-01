import type { IconProps } from "../../shared/types";

export function AlignStartHorizontalIcon({
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
      <rect x="4" y="6" rx="2"/><rect x="14" y="6" rx="2"/><path d="M22 2H2"/>
    </svg>
  );
}
