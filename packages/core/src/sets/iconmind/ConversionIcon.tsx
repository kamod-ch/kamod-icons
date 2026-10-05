import type { IconProps } from "../../shared/types";

export function ConversionIcon({
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
      <path d="M3 6a3 3 0 1 0 6 0 3 3 0 1 0-6 0m7 4 2 2m2.5-.5v3h-3m7 .5 3.5 3.5-3.5 3.5-3.5-3.5Z"/>
    </svg>
  );
}
