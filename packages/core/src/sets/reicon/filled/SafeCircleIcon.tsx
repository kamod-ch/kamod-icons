import type { IconProps } from "../../../shared/types";

export function SafeCircleIcon({
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
      <path fill="currentColor" d="M12.75 12a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z"/><path fill="currentColor" fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM7.75 8a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0zm3.78.47a.75.75 0 1 0-1.06 1.06l1 1q.065.065.14.11c-.23.401-.36.865-.36 1.36s.13.959.36 1.36a1 1 0 0 0-.14.11l-1 1a.75.75 0 1 0 1.06 1.06l1-1a1 1 0 0 0 .11-.14c.401.23.865.36 1.36.36s.959-.13 1.36-.36q.045.075.11.14l1 1a.75.75 0 1 0 1.06-1.06l-1-1a1 1 0 0 0-.14-.11c.23-.401.36-.865.36-1.36s-.13-.959-.36-1.36a1 1 0 0 0 .14-.11l1-1a.75.75 0 0 0-1.06-1.06l-1 1a1 1 0 0 0-.11.14A2.74 2.74 0 0 0 14 9.25c-.495 0-.959.13-1.36.36a1 1 0 0 0-.11-.14z" clipRule="evenodd"/>
    </svg>
  );
}
