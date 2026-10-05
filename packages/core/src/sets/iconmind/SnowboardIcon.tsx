import type { IconProps } from "../../shared/types";

export function SnowboardIcon({
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
      <path d="M6 21C3 18 3 6 6 3c3 3 3 15 0 18m6-5h5v3h-5Zm0-10h5v3h-5Z"/>
    </svg>
  );
}
