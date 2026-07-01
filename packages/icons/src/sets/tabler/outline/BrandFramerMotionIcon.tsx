import type { IconProps } from "../../../shared/types";

export function BrandFramerMotionIcon({
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
      <path d="M12 12 4 4v16L20 4v16l-4-4"/><path d="m20 12-8 8-4-4"/>
    </svg>
  );
}
