import type { IconProps } from "../../../shared/types";

export function PointerIcon({
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
      <path fill="currentColor" strokeWidth="1.333" d="M20.205 8.337 4.975 2.772a1.7 1.7 0 0 0-1.804.4 1.7 1.7 0 0 0-.398 1.803l5.566 15.23c.25.69.88 1.128 1.61 1.128h.036a1.69 1.69 0 0 0 1.6-1.193l2.075-6.48 6.479-2.073a1.7 1.7 0 0 0 1.194-1.602 1.7 1.7 0 0 0-1.128-1.648Z"/>
    </svg>
  );
}
