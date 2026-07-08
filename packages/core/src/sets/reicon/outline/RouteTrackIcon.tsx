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
      fill="none"
      stroke="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" d="M16.15 5.6a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z"/><path fill="currentColor" fillRule="evenodd" d="M13.05 5.602a4.35 4.35 0 1 1 8.7-.002c0 2.65-2.1 4.65-3.9 6a.75.75 0 0 1-.9 0c-1.8-1.35-3.9-3.35-3.9-5.998ZM17.4 2.75a2.85 2.85 0 0 0-2.85 2.852c0 1.691 1.257 3.175 2.85 4.45 1.593-1.275 2.85-2.759 2.85-4.452a2.85 2.85 0 0 0-2.85-2.85Z" clipRule="evenodd"/><path fill="currentColor" d="M13.5 10.25a.75.75 0 0 1 0 1.5H8.75a2 2 0 1 0 0 4H10a.75.75 0 0 1 0 1.5H8.75a3.5 3.5 0 1 1 0-7zm6.75 9a2 2 0 0 0-2-2H17a.75.75 0 0 1 0-1.5h1.25a3.5 3.5 0 1 1 0 7H6.5a.75.75 0 0 1 0-1.5h11.75a2 2 0 0 0 2-2Z"/><path fill="currentColor" d="M12.25 16.5a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0ZM3 20.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"/>
    </svg>
  );
}
