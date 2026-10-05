import type { IconProps } from "../../shared/types";

export function ButterflyIcon({
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
      <path d="M12 6v13m0-11C9 4 3 5 3 9c0 3 3 4 5 3-3 2-4 5-2 7s6-1 6-4m0-7c3-4 9-3 9 1 0 3-3 4-5 3 3 2 4 5 2 7s-6-1-6-4"/>
    </svg>
  );
}
