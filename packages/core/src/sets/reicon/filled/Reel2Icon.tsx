import type { IconProps } from "../../../shared/types";

export function Reel2Icon({
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
      <path fill="currentColor" d="M12 14.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Z"/><path fill="currentColor" fillRule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.99 9.99 0 0 1-4.73 8.5h3.98a.75.75 0 0 1 0 1.5zm1-16.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM6.5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm13 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM12 17.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM8.25 12a3.75 3.75 0 1 0 7.5 0 3.75 3.75 0 0 0-7.5 0Z" clipRule="evenodd"/>
    </svg>
  );
}
