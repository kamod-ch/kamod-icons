import type { IconProps } from "../../shared/types";

export function StadiumIcon({
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
      <path d="M12 4c6 0 10 3 10 8s-4 8-10 8-10-3-10-8 4-8 10-8"/><path d="M8 10h8v4H8Z"/>
    </svg>
  );
}
