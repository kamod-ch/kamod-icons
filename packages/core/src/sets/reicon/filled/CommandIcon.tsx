import type { IconProps } from "../../../shared/types";

export function CommandIcon({
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
      <path fill="currentColor" d="M16 8h3a3 3 0 1 0-3-3v3H8V5a3 3 0 1 0-3 3h3v8h8zm0 8h3a3 3 0 1 1-3 3.001zM5 16l3 .001v3a3 3 0 1 1-3-3Z"/>
    </svg>
  );
}
