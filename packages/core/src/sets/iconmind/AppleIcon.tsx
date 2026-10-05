import type { IconProps } from "../../shared/types";

export function AppleIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M12 9c-3-4-8-2-8 4 0 5 4 8 8 6 4 2 8-1 8-6 0-6-5-8-8-4m0 0V4"/>
    </svg>
  );
}
