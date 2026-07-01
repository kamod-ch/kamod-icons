import type { IconProps } from "../../../shared/types";

export function FrameToolIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 7h1M2 17h1M21 7h1m-1 10h1M17 3V2M7 3V2m10 20v-1M7 22v-1"/><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 17.4V6.6a.6.6 0 0 1 .6-.6h10.8a.6.6 0 0 1 .6.6v10.8a.6.6 0 0 1-.6.6H6.6a.6.6 0 0 1-.6-.6"/>
    </svg>
  );
}
