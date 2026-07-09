import type { IconProps } from "../../../shared/types";

export function DarkLightIcon({
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
      <g transform="scale(1.33333)"><path fill="currentColor" d="M9 6v6a3 3 0 1 0 0-6Zm0 6a3 3 0 1 1 0-6V1.75a7.25 7.25 0 0 0 0 14.5z"/><circle cx="9" cy="9" r="7.25" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/></g>
    </svg>
  );
}
