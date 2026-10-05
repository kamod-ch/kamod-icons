import type { IconProps } from "../../shared/types";

export function FossilIcon({
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
      <path d="M4 11c0-4 4-7 8-7 5 0 8 4 8 8 0 5-4 8-8 8-5 0-8-4-8-9"/><path d="M12 8c2 0 4 2 4 4 0 3-3 5-5 4s-2-4 0-5c1.5-.5 3 0 3 1.5"/>
    </svg>
  );
}
