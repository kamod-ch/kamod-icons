import type { IconProps } from "../../../shared/types";

export function WashTumbleOffIcon({
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
      <path d="M20.116 20.127A3 3 0 0 1 18 21H6a3 3 0 0 1-3-3V6c0-.827.335-1.576.877-2.12M7 3h11a3 3 0 0 1 3 3v11"/><path d="M17.744 13.74a6 6 0 0 0-7.486-7.482M7.759 7.755a6 6 0 1 0 8.48 8.49M3 3l18 18"/>
    </svg>
  );
}
