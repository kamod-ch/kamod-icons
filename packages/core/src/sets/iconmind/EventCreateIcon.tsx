import type { IconProps } from "../../shared/types";

export function EventCreateIcon({
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
      <path d="M2 7h12v3l-2 2 2 2v3H2v-3l2-2-2-2Zm16 1v8m-4-4h8"/>
    </svg>
  );
}
