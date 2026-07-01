import type { IconProps } from "../../../shared/types";

export function FlareIcon({
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
      <path d="M11.106 2.553a1 1 0 0 1 1.788 0l2.851 5.701 5.702 2.852a1 1 0 0 1 .11 1.725l-.11.063-5.702 2.851-2.85 5.702a1 1 0 0 1-1.726.11l-.063-.11-2.852-5.702-5.701-2.85a1 1 0 0 1-.11-1.726l.11-.063 5.701-2.852z"/>
    </svg>
  );
}
