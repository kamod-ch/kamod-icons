import type { IconProps } from "../../shared/types";

export function TvIcon({
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
      <path d="m17 2-5 5-5-5"/><rect x="2" y="7" rx="2"/>
    </svg>
  );
}
