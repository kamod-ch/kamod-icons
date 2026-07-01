import type { IconProps } from "../../shared/types";

export function SignpostBigIcon({
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
      <path d="M10 9H4L2 7l2-2h6m4 0h6l2 2-2 2h-6m-4 13V4a2 2 0 1 1 4 0v18m-6 0h8"/>
    </svg>
  );
}
