import type { IconProps } from "../../../shared/types";

export function MapMinusIcon({
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
      <path d="M12 18.5 9 17l-6 3V7l6-3 6 3 6-3v11M9 4v13m6-10v8m1 4h6"/>
    </svg>
  );
}
