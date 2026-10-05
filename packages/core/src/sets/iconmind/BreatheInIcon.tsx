import type { IconProps } from "../../shared/types";

export function BreatheInIcon({
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
      <path d="M7 12a5 5 0 1 0 10 0 5 5 0 1 0-10 0m-5 0h5"/><path d="m5 10 2 2-2 2m17-2h-5m2-2-2 2 2 2"/>
    </svg>
  );
}
