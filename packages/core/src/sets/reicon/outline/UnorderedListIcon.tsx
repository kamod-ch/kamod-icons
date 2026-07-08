import type { IconProps } from "../../../shared/types";

export function UnorderedListIcon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="scale(1.33333)"><circle cx="3.75" cy="5.25" r="2"/><circle cx="3.75" cy="12.75" r="2"/><path d="M8.75 5.25h7.5m-7.5 7.5h7.5"/></g>
    </svg>
  );
}
