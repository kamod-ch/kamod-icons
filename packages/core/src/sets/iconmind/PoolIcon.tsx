import type { IconProps } from "../../shared/types";

export function PoolIcon({
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
      <path d="M2 7v8h20V7"/><path d="m4 11 2.5-2.5L9 11l2.5-2.5L14 11l2.5-2.5L19 11M2 18h20"/>
    </svg>
  );
}
