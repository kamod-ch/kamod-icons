import type { IconProps } from "../../../shared/types";

export function ArrowsUpLeftIcon({
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
      <path d="m21 7-4-4-4 4"/><path d="M17 3v11a3 3 0 0 1-3 3H3"/><path d="m7 13-4 4 4 4"/>
    </svg>
  );
}
