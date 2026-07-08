import type { IconProps } from "../../../shared/types";

export function ForbiddenCircleIcon({
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
      <path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10a9.96 9.96 0 0 0-2.418-6.52L5.479 19.581A9.96 9.96 0 0 0 12 22Zm0-20C6.477 2 2 6.477 2 12a9.96 9.96 0 0 0 2.418 6.52L18.521 4.419A9.96 9.96 0 0 0 12 2Z"/>
    </svg>
  );
}
