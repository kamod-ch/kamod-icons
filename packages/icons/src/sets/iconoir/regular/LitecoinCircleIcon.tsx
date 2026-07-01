import type { IconProps } from "../../../shared/types";

export function LitecoinCircleIcon({
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
      <path stroke="currentColor" strokeLinecap="round" d="M10.5 7v9.4a.6.6 0 0 0 .6.6h4.4"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m8.5 13 4.5-2m-1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10"/>
    </svg>
  );
}
