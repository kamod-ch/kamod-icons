import type { IconProps } from "../../shared/types";

export function RaincoatIcon({
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
      <path d="M8.5 7a3.5 3.5 0 0 1 7 0M7 21v-9l3-3h4l3 3v9Zm-4-3v-5h4m14 5v-5h-4"/>
    </svg>
  );
}
