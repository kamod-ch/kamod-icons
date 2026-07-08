import type { IconProps } from "../../../shared/types";

export function PowerOffIcon({
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
      <path fill="currentColor" d="M12.75 2a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0z"/><path fill="currentColor" d="M8.217 5.666a.75.75 0 0 0-.689-1.332A9.75 9.75 0 0 0 2.25 13c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75a9.75 9.75 0 0 0-5.278-8.666.75.75 0 1 0-.69 1.332 8.25 8.25 0 1 1-7.566 0Z"/>
    </svg>
  );
}
