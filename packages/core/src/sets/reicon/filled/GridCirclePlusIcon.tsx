import type { IconProps } from "../../../shared/types";

export function GridCirclePlusIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <g fill="currentColor" transform="scale(1.33333)"><path d="M15.5 12h-1.75v-1.75a.75.75 0 0 0-1.5 0V12H10.5a.75.75 0 0 0 0 1.5h1.75v1.75a.75.75 0 0 0 1.5 0V13.5h1.75a.75.75 0 0 0 0-1.5Z"/><circle cx="5" cy="5" r="3.25"/><circle cx="13" cy="5" r="3.25"/><circle cx="5" cy="13" r="3.25"/></g>
    </svg>
  );
}
