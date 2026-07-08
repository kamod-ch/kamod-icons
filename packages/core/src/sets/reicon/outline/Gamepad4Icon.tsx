import type { IconProps } from "../../../shared/types";

export function Gamepad4Icon({
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
      <path fill="currentColor" d="M16.5 12.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM15 14a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-7-2.75a.75.75 0 0 1 .75.75v1.25H10a.75.75 0 0 1 0 1.5H8.75V16a.75.75 0 0 1-1.5 0v-1.25H6a.75.75 0 0 1 0-1.5h1.25V12a.75.75 0 0 1 .75-.75Z"/><path fill="currentColor" fillRule="evenodd" d="M17 1.25a.75.75 0 0 1 .75.75A2.75 2.75 0 0 1 15 4.75h-1c-.69 0-1.25.56-1.25 1.25v.25H16a7.75 7.75 0 0 1 0 15.5H8a7.75 7.75 0 0 1 0-15.5h3.25V6A2.75 2.75 0 0 1 14 3.25h1c.69 0 1.25-.56 1.25-1.25a.75.75 0 0 1 .75-.75Zm-9 6.5a6.25 6.25 0 1 0 0 12.5h8a6.25 6.25 0 1 0 0-12.5z" clipRule="evenodd"/>
    </svg>
  );
}
