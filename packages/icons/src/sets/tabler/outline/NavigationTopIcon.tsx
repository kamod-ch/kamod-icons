import type { IconProps } from "../../../shared/types";

export function NavigationTopIcon({
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
      <path d="M16.54 19.977a.34.34 0 0 0 .357-.07.33.33 0 0 0 .084-.35L12 9 7.018 19.557a.33.33 0 0 0 .084.35.34.34 0 0 0 .357.07L12 18.5zM12 3v2"/>
    </svg>
  );
}
