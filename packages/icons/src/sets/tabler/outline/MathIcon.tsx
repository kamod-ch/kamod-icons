import type { IconProps } from "../../../shared/types";

export function MathIcon({
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
      <path d="M19 5h-7L8 19l-3-6H3m11 0 6 6m-6 0 6-6"/>
    </svg>
  );
}
