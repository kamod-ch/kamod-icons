import type { IconProps } from "../../shared/types";

export function AlignHorizontalSpaceBetweenIcon({
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
      <rect x="3" y="5" rx="2"/><rect x="15" y="7" rx="2"/><path d="M3 2v20M21 2v20"/>
    </svg>
  );
}
