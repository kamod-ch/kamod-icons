import type { IconProps } from "../../../shared/types";

export function ChartCovariateIcon({
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
      <path d="M18 11h.009M14 15h.009M12 6h.009M8 10h.009M3 21 20 4M3 3v18h18"/>
    </svg>
  );
}
