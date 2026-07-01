import type { IconProps } from "../../../shared/types";

export function ArrowRoundaboutRightIcon({
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
      <path d="M21 9h-8a5 5 0 1 0-5 5v7"/><path d="m17 5 4 4-4 4"/>
    </svg>
  );
}
