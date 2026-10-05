import type { IconProps } from "../../shared/types";

export function WhistleIcon({
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
      <path d="M9 6c4 0 7 3 7 7 0 3-3 6-7 6s-6-3-6-6c0-4 2-7 6-7"/><path d="M7 13a2 2 0 1 0 4 0 2 2 0 1 0-4 0m9-3h5v3h-5"/>
    </svg>
  );
}
