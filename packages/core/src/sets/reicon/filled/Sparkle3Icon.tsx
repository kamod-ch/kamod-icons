import type { IconProps } from "../../../shared/types";

export function Sparkle3Icon({
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
      <path fill="currentColor" strokeWidth="1.333" d="M4.033 7.497a.668.668 0 0 0 1.267 0l.561-1.684 1.684-.561a.667.667 0 0 0 0-1.264l-1.684-.561L5.3 1.743c-.183-.544-1.083-.544-1.265 0l-.562 1.684-1.684.561a.667.667 0 0 0 0 1.264l1.684.561.562 1.684Zm18 4.24-6.046-2.39L13.596 3.3c-.303-.763-1.557-.763-1.86 0l-2.39 6.047-6.047 2.39a.999.999 0 0 0 0 1.859l6.046 2.39 2.391 6.047a1 1 0 0 0 1.859 0l2.39-6.046 6.047-2.391a.999.999 0 0 0 0-1.859Z"/>
    </svg>
  );
}
