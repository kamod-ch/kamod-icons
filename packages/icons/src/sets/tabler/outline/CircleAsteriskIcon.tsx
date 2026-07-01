import type { IconProps } from "../../../shared/types";

export function CircleAsteriskIcon({
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
      <path d="M12 8.5v7M9 10l6 4m-6 0 6-4M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0"/>
    </svg>
  );
}
