import type { IconProps } from "../../../shared/types";

export function PencilOffIcon({
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
      <path d="m10 10-6 6v4h4l6-6m1.99-1.99 2.504-2.504a2.828 2.828 0 1 0-4-4l-2.5 2.5M13.5 6.5l4 4M3 3l18 18"/>
    </svg>
  );
}
