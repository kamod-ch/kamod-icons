import type { IconProps } from "../../shared/types";

export function GitlabIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m22 13.29-3.33-10a.4.4 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.37.25l-2.26 6.67H8.32L6.1 3.26a.4.4 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.37.25L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83"/>
    </svg>
  );
}
