import type { IconProps } from "../../../shared/types";

export function GenderTransgenderIcon({
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
      <path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0m7-3 6-6m0 4V3h-4M9 9 3 3m0 4V3h4M5.5 8.5l3-3M12 16v5m-2.5-2h5"/>
    </svg>
  );
}
