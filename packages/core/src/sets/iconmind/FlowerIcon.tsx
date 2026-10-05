import type { IconProps } from "../../shared/types";

export function FlowerIcon({
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
      <path d="M7.5 7a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0-9 0m4.5 4.5V21m-7-3c0-3.6 2.4-6 6-6 0 3.6-2.4 6-6 6m8 0c0-3.6 2.4-6 6-6 0 3.6-2.4 6-6 6m-5 3h8"/>
    </svg>
  );
}
