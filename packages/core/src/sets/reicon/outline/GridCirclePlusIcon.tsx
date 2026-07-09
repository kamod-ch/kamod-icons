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
      fill="none"
      stroke="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="scale(1.33333)"><path d="M13 10.25v5m2.5-2.5h-5"/><circle cx="5" cy="5" r="2.5"/><circle cx="13" cy="5" r="2.5"/><circle cx="5" cy="13" r="2.5"/></g>
    </svg>
  );
}
