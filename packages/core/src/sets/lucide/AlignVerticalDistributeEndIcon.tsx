import type { IconProps } from "../../shared/types";

export function AlignVerticalDistributeEndIcon({
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
      <rect x="5" y="14" rx="2"/><rect x="7" y="4" rx="2"/><path d="M2 20h20M2 10h20"/>
    </svg>
  );
}
