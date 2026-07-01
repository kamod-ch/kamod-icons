import type { IconProps } from "../../../shared/types";

export function ChartColumnIcon({
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
      <path d="M4 20h3m10 0h3m-9.5 0h3M4 16h3m10 0h3m-9.5 0h3M4 12h3m10 0h3m-9.5 0h3M4 8h3m10 0h3M4 4h3"/>
    </svg>
  );
}
