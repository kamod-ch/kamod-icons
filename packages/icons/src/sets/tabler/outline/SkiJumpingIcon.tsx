import type { IconProps } from "../../../shared/types";

export function SkiJumpingIcon({
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
      <path d="M17 17.5 12 13V7l5 4M7 17.5l5-4.5"/><path d="m15.103 21.58 6.762-14.502a2 2 0 0 0-.968-2.657m-12 17.159L2.135 7.077a2 2 0 0 1 .968-2.657M7 11l5-4m-1.993-3a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
