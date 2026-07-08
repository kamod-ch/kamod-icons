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
      fill="none"
      stroke="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" fillRule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12ZM12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5Zm-5 4.5a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 7 7.25Zm3.47 1.22a.75.75 0 0 1 1.06 0l1 1q.065.065.11.14c.401-.23.865-.36 1.36-.36s.959.13 1.36.36a1 1 0 0 1 .11-.14l1-1a.75.75 0 1 1 1.06 1.06l-1 1a1 1 0 0 1-.14.11c.23.401.36.865.36 1.36s-.13.959-.36 1.36q.075.045.14.11l1 1a.75.75 0 1 1-1.06 1.06l-1-1a1 1 0 0 1-.11-.14c-.401.23-.865.36-1.36.36s-.959-.13-1.36-.36a1 1 0 0 1-.11.14l-1 1a.75.75 0 1 1-1.06-1.06l1-1a1 1 0 0 1 .14-.11 2.74 2.74 0 0 1-.36-1.36c0-.495.13-.959.36-1.36a1 1 0 0 1-.14-.11l-1-1a.75.75 0 0 1 0-1.06ZM14 10.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z" clipRule="evenodd"/>
    </svg>
  );
}
