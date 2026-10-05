import type { IconProps } from "../../shared/types";

export function EstateIcon({
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
      <path d="m2 12 5-5 5 5m-8.5 0v8h7v-8m1.5 0 5-5 5 5m-8.5 0v8h7v-8"/>
    </svg>
  );
}
