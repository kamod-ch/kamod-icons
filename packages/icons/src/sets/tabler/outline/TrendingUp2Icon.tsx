import type { IconProps } from "../../../shared/types";

export function TrendingUp2Icon({
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
      <path d="m18 5 3 3-3 3"/><path d="M3 18h5l7-10h6"/>
    </svg>
  );
}
