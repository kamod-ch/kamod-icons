import type { IconProps } from "../../shared/types";

export function MeteorIcon({
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
      <path d="M16 4.5 19.5 8 16 11.5 12.5 8ZM3 19l7-7m-3 9 5-5"/>
    </svg>
  );
}
