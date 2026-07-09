import type { IconProps } from "../../../shared/types";

export function MicrophoneIcon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="scale(1.33333)"><rect x="5.75" y="1.75" rx="3.25" ry="3.25"/><path d="M15.25 8A6.25 6.25 0 0 1 9 14.25h0A6.25 6.25 0 0 1 2.75 8M9 14.25v2"/></g>
    </svg>
  );
}
