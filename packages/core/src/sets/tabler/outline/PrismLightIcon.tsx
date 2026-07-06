import type { IconProps } from "../../../shared/types";

export function PrismLightIcon({
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
      <path d="M4.731 19H16.27a1 1 0 0 0 .866-1.5l-5.769-10a1 1 0 0 0-1.732 0l-5.769 10a1 1 0 0 0 .865 1.5M2 13h4.45M18 5l-4.5 6M22 9l-7.75 3.25M22 15l-7-1.5"/>
    </svg>
  );
}
