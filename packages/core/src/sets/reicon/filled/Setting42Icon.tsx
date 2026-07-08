import type { IconProps } from "../../../shared/types";

export function Setting42Icon({
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
      <path fill="currentColor" d="M21.3 7.58h-5.58c-.39 0-.7-.31-.7-.7s.31-.7.7-.7h5.58c.39 0 .7.31.7.7s-.31.7-.7.7Zm-14.88 0H2.7c-.39 0-.7-.31-.7-.7s.31-.7.7-.7h3.72c.39 0 .7.31.7.7s-.32.7-.7.7Z"/><path fill="currentColor" d="M10.14 10.83a3.95 3.95 0 1 0 0-7.9 3.95 3.95 0 0 0 0 7.9Zm11.16 6.98h-3.72c-.39 0-.7-.31-.7-.7s.31-.7.7-.7h3.72c.39 0 .7.31.7.7s-.31.7-.7.7Zm-13.02 0H2.7c-.39 0-.7-.31-.7-.7s.31-.7.7-.7h5.58c.39 0 .7.31.7.7s-.32.7-.7.7Z"/><path fill="currentColor" d="M13.86 21.072a3.95 3.95 0 1 0 0-7.9 3.95 3.95 0 0 0 0 7.9Z"/>
    </svg>
  );
}
