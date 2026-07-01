import type { IconProps } from "../../../shared/types";

export function DualScreenIcon({
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
      <path d="M19 3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-5v2a1 1 0 0 1-1.351.936l-8-3A1 1 0 0 1 4 19V4a1 1 0 0 1 .212-.616l.068-.079.078-.072.066-.05.092-.058.065-.033.1-.04.099-.028.046-.01.108-.013L5 3zm-5.649 3.064A1 1 0 0 1 14 7v11h4V5h-7.486z"/>
    </svg>
  );
}
