import type { IconProps } from "../../../shared/types";

export function GenderDemiboyIcon({
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
      <path d="M5 14a5 5 0 1 0 10 0 5 5 0 1 0-10 0m14-9-5.4 5.4M19 5h-5"/>
    </svg>
  );
}
