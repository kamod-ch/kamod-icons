import type { IconProps } from "../../shared/types";

export function ChangeCoinsIcon({
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
      <path d="M8.5 7.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0m-6 9.5a4 4 0 1 0 8 0 4 4 0 1 0-8 0m11 0a4 4 0 1 0 8 0 4 4 0 1 0-8 0"/>
    </svg>
  );
}
