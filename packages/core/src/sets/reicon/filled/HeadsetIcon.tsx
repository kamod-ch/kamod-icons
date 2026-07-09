import type { IconProps } from "../../../shared/types";

export function HeadsetIcon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="M14.279 22.667h-2.612a1 1 0 0 1 0-2h2.612a1.66 1.66 0 0 0 1.625-1.295l.457-1.935a1.003 1.003 0 0 1 1.203-.744c.536.127.87.667.743 1.203l-.456 1.93a3.65 3.65 0 0 1-3.572 2.84Z"/><path d="M18.85 18.667h-1.517c-.302 0-.588-.138-.778-.372a1 1 0 0 1-.199-.839l1.445-6.667A6 6 0 0 0 18 9.335c0-3.308-2.692-6-6-6s-6 2.692-6 6c0 .438.061.892.193 1.428l1.452 6.693a1 1 0 0 1-.977 1.21H5.152a3.69 3.69 0 0 1-3.584-2.889l-.447-2.06a3.67 3.67 0 0 1 1.932-4.049l.95-.479C4.08 4.845 7.639 1.335 12 1.335s7.92 3.51 7.999 7.854l.95.479a3.67 3.67 0 0 1 1.931 4.05l-.446 2.06a3.69 3.69 0 0 1-3.584 2.889Z"/></g>
    </svg>
  );
}
