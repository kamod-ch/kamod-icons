import type { IconProps } from "../../../shared/types";

export function EyeXIcon({
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
      <path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0"/><path d="M13.048 17.942A9 9 0 0 1 12 18q-5.4 0-9-6 3.6-6 9-6t9 6a18 18 0 0 1-1.362 1.975M22 22l-5-5m0 5 5-5"/>
    </svg>
  );
}
