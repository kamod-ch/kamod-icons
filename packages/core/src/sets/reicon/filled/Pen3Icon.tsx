import type { IconProps } from "../../../shared/types";

export function Pen3Icon({
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
      <path fill="currentColor" strokeWidth="1.333" d="M20.203 3.797c-1.331-1.33-3.654-1.329-4.984 0L4.807 14.21c-1.151 1.152-1.868 4.542-2.124 5.946a1.002 1.002 0 0 0 1.162 1.164c1.404-.255 4.794-.972 5.946-2.124l7.326-7.327.29.29a1.67 1.67 0 0 1 0 2.357l-2.115 2.114a1 1 0 0 0 1.413 1.415l2.115-2.115a3.67 3.67 0 0 0 0-5.185l-.29-.29 1.671-1.67a3.53 3.53 0 0 0 0-4.984Zm-1.415 3.57-1.67 1.67-2.157-2.156 1.671-1.67c.288-.288.67-.446 1.079-.446s.789.159 1.077.446a1.53 1.53 0 0 1 0 2.156Z"/>
    </svg>
  );
}
