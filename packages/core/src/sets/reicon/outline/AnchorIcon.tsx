import type { IconProps } from "../../../shared/types";

export function AnchorIcon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="scale(1.33333)"><path d="M16.25 10.531 15.25 9a6.25 6.25 0 1 1-12.5 0l-1 1.531M9 5.25v11"/><circle cx="9" cy="3.5" r="1.75"/><path d="M7.25 8.25h3.5"/></g>
    </svg>
  );
}
