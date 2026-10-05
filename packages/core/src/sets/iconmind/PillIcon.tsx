import type { IconProps } from "../../shared/types";

export function PillIcon({
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
      <path d="m3.5 13.5 10-10a5 5 0 0 1 7 7l-10 10a5 5 0 0 1-7-7m5-5 7 7"/>
    </svg>
  );
}
