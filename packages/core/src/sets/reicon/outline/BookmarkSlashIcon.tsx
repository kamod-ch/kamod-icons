import type { IconProps } from "../../../shared/types";

export function BookmarkSlashIcon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V5a2.666 2.666 0 0 1 2.667-2.667h8.666A2.666 2.666 0 0 1 19 5m0 5.656v11.01l-6.606-4.404m-9.727 4.071L21.333 2.667"/>
    </svg>
  );
}
