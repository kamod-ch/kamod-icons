import type { IconProps } from "../../shared/types";

export function HobbyCameraIcon({
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
      <path d="M3 8v11h18V8Zm5 0 3-3h3l3 3"/><path d="M8 13a4 4 0 1 0 8 0 4 4 0 1 0-8 0m9-2a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
