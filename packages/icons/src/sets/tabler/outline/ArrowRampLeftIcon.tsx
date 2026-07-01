import type { IconProps } from "../../../shared/types";

export function ArrowRampLeftIcon({
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
      <path d="M17 3v8.707M13 7l4-4 4 4M7 14l-4-4 4-4"/><path d="M17 21A11 11 0 0 0 6 10H3"/>
    </svg>
  );
}
