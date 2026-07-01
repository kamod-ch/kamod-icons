import type { IconProps } from "../../../shared/types";

export function TextColorIcon({
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
      <path d="M9 15V8a3 3 0 0 1 6 0v7m-6-4h6M5 19h14"/>
    </svg>
  );
}
