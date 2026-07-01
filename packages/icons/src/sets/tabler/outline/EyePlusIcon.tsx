import type { IconProps } from "../../../shared/types";

export function EyePlusIcon({
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
      <path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0"/><path d="M12 18q-5.4 0-9-6 3.6-6 9-6t9 6m-5 7h6m-3-3v6"/>
    </svg>
  );
}
