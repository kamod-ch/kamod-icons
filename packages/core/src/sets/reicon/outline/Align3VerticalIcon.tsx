import type { IconProps } from "../../../shared/types";

export function Align3VerticalIcon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="scale(1.33333)"><rect x="2.75" y="2.75" rx="1.5" ry="1.5"/><rect x="10.75" y="5.75" rx="1.5" ry="1.5"/></g>
    </svg>
  );
}
