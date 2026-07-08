import type { IconProps } from "../../../shared/types";

export function DropletIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M11.113 1.62a1.246 1.246 0 0 1 1.774 0c1.913 1.935 3.745 3.943 5.1 6.056 1.357 2.117 2.263 4.383 2.263 6.824 0 4.281-3.297 8.25-8.25 8.25s-8.25-3.969-8.25-8.25c0-2.441.906-4.707 2.263-6.824 1.354-2.113 3.187-4.121 5.1-6.055ZM12 2.858c-1.828 1.858-3.498 3.716-4.724 5.629C6.012 10.456 5.25 12.44 5.25 14.5c0 3.532 2.703 6.75 6.75 6.75s6.75-3.218 6.75-6.75c0-2.059-.762-4.043-2.026-6.014C15.498 6.573 13.827 4.715 12 2.857Z" clipRule="evenodd"/>
    </svg>
  );
}
