import type { IconProps } from "../../shared/types";

export function FlowerBulbIcon({
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
      <path d="M12 21c-3 0-5-2-5-4.5S9 12 12 12s5 2 5 4.5-2 4.5-5 4.5m0-16v7m0-2c3 0 5-3 5-6-3 0-5 3-5 6"/>
    </svg>
  );
}
