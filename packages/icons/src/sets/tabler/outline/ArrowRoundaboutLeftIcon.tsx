import type { IconProps } from "../../../shared/types";

export function ArrowRoundaboutLeftIcon({
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
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M3 9h8a5 5 0 1 1 5 5v7"/><path d="M7 5 3 9l4 4"/>
    </svg>
  );
}
