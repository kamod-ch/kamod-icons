import type { IconProps } from "../../../shared/types";

export function FileContentIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" strokeWidth="1.333" d="m20.65 7.236-5.22-5.219a2.32 2.32 0 0 0-1.649-.684H6.333A3.67 3.67 0 0 0 2.667 5v14a3.67 3.67 0 0 0 3.666 3.667h11.334A3.67 3.67 0 0 0 21.333 19V8.885c0-.622-.242-1.209-.684-1.649ZM7.666 8h2.666a1 1 0 0 1 0 2H7.667a1 1 0 0 1 0-2Zm8.666 10H7.667a1 1 0 0 1 0-2h8.666a1 1 0 0 1 0 2Zm0-4H7.667a1 1 0 0 1 0-2h8.666a1 1 0 0 1 0 2Zm2.91-5.333h-3.91c-.733 0-1.333-.6-1.333-1.334V3.44l.017-.007 5.23 5.228z"/>
    </svg>
  );
}
