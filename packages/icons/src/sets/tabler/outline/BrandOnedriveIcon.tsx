import type { IconProps } from "../../../shared/types";

export function BrandOnedriveIcon({
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
      <path d="M18.456 10.45a6.45 6.45 0 0 0-12-2.151 4.857 4.857 0 0 0-4.44 5.241 4.856 4.856 0 0 0 5.236 4.444h10.751a3.77 3.77 0 0 0 3.99-3.54 3.77 3.77 0 0 0-3.538-3.992z"/>
    </svg>
  );
}
