import type { IconProps } from "../../../shared/types";

export function ChartPpfIcon({
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
      <path d="M19 17c0-6.075-5.373-11-12-11M3 3v18h18"/>
    </svg>
  );
}
