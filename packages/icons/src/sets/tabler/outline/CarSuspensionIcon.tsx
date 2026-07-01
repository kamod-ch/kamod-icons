import type { IconProps } from "../../../shared/types";

export function CarSuspensionIcon({
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
      <path d="M12 22a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0-6V4m1-2h-2v2h2zm-4 9 6-1m-6 4 6-1M9 8l6-1"/>
    </svg>
  );
}
