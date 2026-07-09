import type { IconProps } from "../../../shared/types";

export function PowerOffIcon({
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
      <path fill="currentColor" d="M13 2a1 1 0 1 0-2 0v7.5a1 1 0 1 0 2 0z"/><path fill="currentColor" d="M8.332 5.888a1 1 0 1 0-.918-1.776A10 10 0 0 0 2 13c0 5.523 4.477 10 10 10s10-4.477 10-10a10 10 0 0 0-5.414-8.888 1 1 0 1 0-.918 1.776 8 8 0 1 1-7.336 0Z"/>
    </svg>
  );
}
