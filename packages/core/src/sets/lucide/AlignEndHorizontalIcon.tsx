import type { IconProps } from "../../shared/types";

export function AlignEndHorizontalIcon({
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
      <rect x="4" y="2" rx="2"/><rect x="14" y="9" rx="2"/><path d="M22 22H2"/>
    </svg>
  );
}
