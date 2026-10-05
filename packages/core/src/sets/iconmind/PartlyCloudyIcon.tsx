import type { IconProps } from "../../shared/types";

export function PartlyCloudyIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M4 7a4 4 0 1 0 8 0 4 4 0 1 0-8 0M2.5 2.5 5 5m8.5-2.5L11 5M8 21a4 4 0 0 1 2-7.5 5 5 0 0 1 9-1 4.5 4.5 0 0 1 3 8.5Z"/>
    </svg>
  );
}
