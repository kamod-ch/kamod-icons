import type { IconProps } from "../../shared/types";

export function HomeReturnIcon({
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
      <path d="m3 12 7-7 7 7M5 12v8h10v-8m1 4h6m-3.5-2.5L16 16l2.5 2.5"/>
    </svg>
  );
}
