import type { IconProps } from "../../../shared/types";

export function PlugTypeLIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 3H5.6a.6.6 0 0 0-.6.6v16.8a.6.6 0 0 0 .6.6H10m1-14h2m-2 5h2m-2 5h2m1-14h4.4a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H14"/>
    </svg>
  );
}
