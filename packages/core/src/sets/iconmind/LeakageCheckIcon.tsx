import type { IconProps } from "../../shared/types";

export function LeakageCheckIcon({
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
      <path d="M9 3v7l-5 5v4h16v-4l-5-5V3Zm0 9.5h6"/><path d="M9.5 14.5 12 17l2.5-2.5"/>
    </svg>
  );
}
