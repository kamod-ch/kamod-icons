import type { IconProps } from "../../shared/types";

export function CircleArrowOutUpRightIcon({
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
      <path d="M22 12A10 10 0 1 1 12 2m10 0L12 12m4-10h6v6"/>
    </svg>
  );
}
