import type { IconProps } from "../../shared/types";

export function SaltIcon({
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
      <path d="M8 21V11l2-2h4l2 2v10Zm0-8h8M9 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m4 1a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
