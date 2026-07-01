import type { IconProps } from "../../shared/types";

export function CircleArrowOutDownRightIcon({
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
      <path d="M12 22a10 10 0 1 1 10-10m0 10L12 12m10 4v6h-6"/>
    </svg>
  );
}
