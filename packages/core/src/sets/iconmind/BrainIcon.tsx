import type { IconProps } from "../../shared/types";

export function BrainIcon({
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
      <path d="M11 4C7 4 5 6 5 8c-2 1-2 4 0 5 0 3 2 7 6 7Zm3 0c4 0 6 2 6 4 2 1 2 4 0 5 0 3-2 7-6 7Z"/>
    </svg>
  );
}
