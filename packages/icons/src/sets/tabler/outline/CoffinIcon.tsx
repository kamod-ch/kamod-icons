import type { IconProps } from "../../../shared/types";

export function CoffinIcon({
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
      <path d="M7 3 5 9l2 12h6l2-12-2-6zm3 4v5M8 9h4"/><path d="M13 21h4l2-12-2-6h-4"/>
    </svg>
  );
}
