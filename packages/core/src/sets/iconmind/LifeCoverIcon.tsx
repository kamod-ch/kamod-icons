import type { IconProps } from "../../shared/types";

export function LifeCoverIcon({
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
      <path d="M4.5 9.5a7.5 7.5 0 0 1 15 0m-15 0h15M9 16a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1 3 0l-3 3Z"/>
    </svg>
  );
}
