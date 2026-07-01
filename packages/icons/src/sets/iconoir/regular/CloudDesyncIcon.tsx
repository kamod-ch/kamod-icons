import type { IconProps } from "../../../shared/types";

export function CloudDesyncIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20 17.607c1.494-.585 3-1.918 3-4.607 0-4-3.333-5-5-5 0-2 0-6-6-6S6 6 6 8c-1.667 0-5 1-5 5 0 2.689 1.506 4.022 3 4.607m12.42 1.88-1.768 1.768a4 4 0 0 1-5.656 0l-.354-.353"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m16.067 21.962.353-2.475-2.475.354zm-8.487-5.06 1.768-1.768a4 4 0 0 1 5.657 0l.354.353"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m7.934 14.427-.353 2.475 2.474-.354z"/>
    </svg>
  );
}
