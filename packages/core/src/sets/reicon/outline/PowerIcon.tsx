import type { IconProps } from "../../../shared/types";

export function PowerIcon({
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
      <path fill="currentColor" d="M12.75 2a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z"/><path fill="currentColor" d="M8.792 4.397a.75.75 0 1 0-.584-1.382A9.75 9.75 0 0 0 2.25 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75a9.75 9.75 0 0 0-5.958-8.985.75.75 0 1 0-.584 1.382A8.253 8.253 0 0 1 12 20.25 8.25 8.25 0 0 1 8.792 4.397Z"/>
    </svg>
  );
}
