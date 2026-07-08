import type { IconProps } from "../../../shared/types";

export function ArrowsRightIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M10.512 4.43a.75.75 0 0 0-.081 1.058L16.012 12l-5.581 6.512a.75.75 0 1 0 1.138.976l6-7a.75.75 0 0 0 0-.976l-6-7a.75.75 0 0 0-1.057-.081Z" clipRule="evenodd"/><path fill="currentColor" d="M6.25 5a.75.75 0 0 1 1.32-.488l6 7a.75.75 0 0 1 0 .976l-6 7A.75.75 0 0 1 6.25 19z"/>
    </svg>
  );
}
