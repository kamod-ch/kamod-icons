import type { IconProps } from "../../../shared/types";

export function RouteTrackIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M17.4 1.5a4.1 4.1 0 0 0-4.1 4.102c0 2.515 2 4.448 3.8 5.798a.5.5 0 0 0 .6 0c1.8-1.35 3.8-3.283 3.8-5.8a4.1 4.1 0 0 0-4.1-4.1Zm0 2.85a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z" clipRule="evenodd"/><path fill="currentColor" d="M14.25 11a.75.75 0 0 0-.75-.75H8.75a3.5 3.5 0 1 0 0 7H10a.75.75 0 0 0 0-1.5H8.75a2 2 0 1 1 0-4h4.75a.75.75 0 0 0 .75-.75Zm6 8.25a2 2 0 0 0-2-2H17a.75.75 0 0 1 0-1.5h1.25a3.5 3.5 0 1 1 0 7H6.5a.75.75 0 0 1 0-1.5h11.75a2 2 0 0 0 2-2Z"/><path fill="currentColor" d="M12.25 16.5a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0ZM1.75 22a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z"/>
    </svg>
  );
}
