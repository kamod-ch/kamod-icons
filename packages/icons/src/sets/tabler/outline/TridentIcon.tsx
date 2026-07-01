import type { IconProps } from "../../../shared/types";

export function TridentIcon({
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
      <path d="m3 6 2-2v3a7 7 0 0 0 14 0V4l2 2"/><path d="M12 21V3l-2 2m4 0-2-2"/>
    </svg>
  );
}
