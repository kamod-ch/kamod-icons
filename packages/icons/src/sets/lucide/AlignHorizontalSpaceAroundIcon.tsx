import type { IconProps } from "../../shared/types";

export function AlignHorizontalSpaceAroundIcon({
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
      <rect x="9" y="7" rx="2"/><path d="M4 22V2m16 20V2"/>
    </svg>
  );
}
