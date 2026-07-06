import type { IconProps } from "../../../shared/types";

export function EyeTableIcon({
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
      <path d="M20 2a1 1 0 0 1 0 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a1 1 0 1 1 0-2zM8 17l-.128.007A1 1 0 0 0 7.99 19l.128-.007A1 1 0 0 0 8 17m4 0-.128.007A1 1 0 0 0 11.99 19l.128-.007A1 1 0 0 0 12 17m4 0-.128.007A1 1 0 0 0 15.99 19l.128-.007A1 1 0 0 0 16 17m-6-3H9a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2m5 0h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2m-1-8h-4a1 1 0 1 0 0 2h1v3a1 1 0 0 0 2 0V8h1a1 1 0 0 0 0-2"/>
    </svg>
  );
}
