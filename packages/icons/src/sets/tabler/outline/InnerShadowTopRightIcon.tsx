import type { IconProps } from "../../../shared/types";

export function InnerShadowTopRightIcon({
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
      <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18"/><path d="M18 12a6 6 0 0 0-6-6"/>
    </svg>
  );
}
