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
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" fillRule="evenodd" d="M17 1.25a.75.75 0 0 1 .75.75A2.75 2.75 0 0 1 15 4.75h-1c-.69 0-1.25.56-1.25 1.25v.5H16a7.5 7.5 0 0 1 0 15H8a7.5 7.5 0 0 1 0-15h3.25V6A2.75 2.75 0 0 1 14 3.25h1c.69 0 1.25-.56 1.25-1.25a.75.75 0 0 1 .75-.75ZM8.75 12a.75.75 0 0 0-1.5 0v1.25H6a.75.75 0 0 0 0 1.5h1.25V16a.75.75 0 0 0 1.5 0v-1.25H10a.75.75 0 0 0 0-1.5H8.75zm7.75.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM15 14a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" clipRule="evenodd"/>
    </svg>
  );
}
