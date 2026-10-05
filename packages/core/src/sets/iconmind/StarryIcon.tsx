import type { IconProps } from "../../shared/types";

export function StarryIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="m7 5 3 3-3 3-3-3Zm9-1.5L18.5 6 16 8.5 13.5 6Zm-4 7 2.5 2.5-2.5 2.5L9.5 13ZM2 19h20"/>
    </svg>
  );
}
