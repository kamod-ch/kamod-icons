import type { IconProps } from "../../../shared/types";

export function Hierarchy32Icon({
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
      <path fill="currentColor" d="M5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm14 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM5 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path fill="currentColor" d="M5 16.75c-.41 0-.75-.34-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75c0 2.19 1.06 3.25 3.25 3.25h7c.41 0 .75.34.75.75s-.34.75-.75.75H9c-1.36 0-2.45-.35-3.25-1.01V16c0 .41-.34.75-.75.75Z"/>
    </svg>
  );
}
