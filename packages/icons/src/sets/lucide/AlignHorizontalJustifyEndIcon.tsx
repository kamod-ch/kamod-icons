import type { IconProps } from "../../shared/types";

export function AlignHorizontalJustifyEndIcon({
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
      <rect x="2" y="5" rx="2"/><rect x="12" y="7" rx="2"/><path d="M22 2v20"/>
    </svg>
  );
}
