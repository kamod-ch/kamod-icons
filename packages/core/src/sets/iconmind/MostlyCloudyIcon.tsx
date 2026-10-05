import type { IconProps } from "../../shared/types";

export function MostlyCloudyIcon({
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
      <path d="M12 6a4 4 0 0 1 8 0M10 3.5l2 2m10-2-2 2M4 20a4 4 0 0 1 2-7.5 5 5 0 0 1 9.5-1.5 5.5 5.5 0 0 1 4.5 9Z"/>
    </svg>
  );
}
