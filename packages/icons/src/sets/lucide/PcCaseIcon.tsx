import type { IconProps } from "../../shared/types";

export function PcCaseIcon({
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
      <rect x="5" y="2" rx="2"/><path d="M15 14h.01M9 6h6m-6 4h6"/>
    </svg>
  );
}
