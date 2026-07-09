import type { IconProps } from "../../../shared/types";

export function GamingButtonsIcon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="scale(1.33333)"><rect x="2.75" y="2.75" rx="1" ry="1"/><circle cx="13" cy="13" r="2.5"/><path d="m7.25 10.75-4.5 4.5m0-4.5 4.5 4.5m5.317-12.674L10.301 6.5a.5.5 0 0 0 .433.75h4.531a.5.5 0 0 0 .433-.75l-2.266-3.924a.5.5 0 0 0-.866 0Z"/></g>
    </svg>
  );
}
