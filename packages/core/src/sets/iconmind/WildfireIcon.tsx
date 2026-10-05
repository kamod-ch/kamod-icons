import type { IconProps } from "../../shared/types";

export function WildfireIcon({
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
      <path d="M12 2c2 4 6 6 6 11a6 6 0 1 1-12 0c0-4 3-5 3-8 1 1 3 1 3-3M3 21h18"/>
    </svg>
  );
}
