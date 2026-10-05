import type { IconProps } from "../../shared/types";

export function UnderlineWavyIcon({
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
      <path d="M3 4h18M3 9h18M3 16l2.5-2.5L8 16l2.5-2.5L13 16l2.5-2.5L18 16l2.5-2.5"/>
    </svg>
  );
}
