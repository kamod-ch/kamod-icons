import type { IconProps } from "../../shared/types";

export function PanelTopBottomDashedIcon({
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
      <path d="M14 15h1m-1-6h1m4 6h2m-2-6h2M3 15h2M3 9h2m4 6h1M9 9h1"/><rect x="3" y="3" rx="2"/>
    </svg>
  );
}
