import type { IconProps } from "../../shared/types";

export function AlignVerticalDistributeCenterIcon({
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
      <path d="M22 17h-3m3-10h-5M5 17H2M7 7H2"/><rect x="5" y="14" rx="2"/><rect x="7" y="4" rx="2"/>
    </svg>
  );
}
