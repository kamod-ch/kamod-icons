import type { IconProps } from "../../../shared/types";

export function BrandNextcloudIcon({
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
      <path d="M7 12a5 5 0 1 0 10 0 5 5 0 1 0-10 0m-5 .5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0m15 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0"/>
    </svg>
  );
}
