import type { IconProps } from "../../shared/types";

export function MuteUserIcon({
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
      <path d="M5 8a3 3 0 1 0 6 0 3 3 0 1 0-6 0m-1 9a4 4 0 0 1 8 0m3-5c2.5 0 4 1 4 3s-1.5 3-4 3Zm-1 7 7-7"/>
    </svg>
  );
}
