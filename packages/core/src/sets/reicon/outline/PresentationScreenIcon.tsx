import type { IconProps } from "../../../shared/types";

export function PresentationScreenIcon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="scale(1.33333)"><path d="m5.75 16.25 1-3m5.5 3-1-3"/><rect x="1.75" y="2.75" rx="2" ry="2"/><path d="M9 2.75V1.5"/></g>
    </svg>
  );
}
