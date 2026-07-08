import type { IconProps } from "../../../shared/types";

export function ReelIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M2 12c0 5.523 4.477 10 10 10h9.25a.75.75 0 0 0 0-1.5h-3.98A9.99 9.99 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12Zm10-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-4.5-7.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM18 12a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" clipRule="evenodd"/>
    </svg>
  );
}
