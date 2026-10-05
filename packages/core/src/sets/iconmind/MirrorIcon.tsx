import type { IconProps } from "../../shared/types";

export function MirrorIcon({
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
      <path d="M6 10a6 7 0 1 1 12 0 6 7 0 1 1-12 0m6 7v3m-4 0h8"/>
    </svg>
  );
}
