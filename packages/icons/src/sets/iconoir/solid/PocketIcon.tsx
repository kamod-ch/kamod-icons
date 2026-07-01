import type { IconProps } from "../../../shared/types";

export function PocketIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M12 20.75A9.75 9.75 0 0 0 21.75 11V6A2.75 2.75 0 0 0 19 3.25H5A2.75 2.75 0 0 0 2.25 6v5A9.75 9.75 0 0 0 12 20.75M8.53 9.47a.75.75 0 0 0-1.06 1.06l4 4a.75.75 0 0 0 1.06 0l4-4a.75.75 0 1 0-1.06-1.06L12 12.94z" clipRule="evenodd"/>
    </svg>
  );
}
