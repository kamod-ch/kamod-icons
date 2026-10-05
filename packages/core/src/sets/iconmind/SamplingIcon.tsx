import type { IconProps } from "../../shared/types";

export function SamplingIcon({
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
      <path d="M5 6a1 1 0 1 0 2 0 1 1 0 1 0-2 0m5-1a2 2 0 1 0 4 0 2 2 0 1 0-4 0m7 1a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-5 3v9m-3-3 3 3 3-3"/>
    </svg>
  );
}
