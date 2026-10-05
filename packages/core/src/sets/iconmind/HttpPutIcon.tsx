import type { IconProps } from "../../shared/types";

export function HttpPutIcon({
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
      <path d="M7 3H3v18h4M17 3h4v18h-4M9.5 7.5h5m-2.5 3V16m-2.5-3 2.5-2.5 2.5 2.5"/>
    </svg>
  );
}
