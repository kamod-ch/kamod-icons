import type { IconProps } from "../../shared/types";

export function RecyclingDayIcon({
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
      <path d="M6 8v13h10V8ZM5 8V5h12v3"/><path d="m8 13 3-3 3 3m-6 4 3 3 3-3"/>
    </svg>
  );
}
