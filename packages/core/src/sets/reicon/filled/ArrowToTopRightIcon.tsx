import type { IconProps } from "../../../shared/types";

export function ArrowToTopRightIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M6.47 10.03a.75.75 0 0 1 0-1.06l5-5a.75.75 0 0 1 1.06 0l5 5a.75.75 0 1 1-1.06 1.06l-3.72-3.72v8.19c0 .713.22 1.8.859 2.687.61.848 1.635 1.563 3.391 1.563a.75.75 0 0 1 0 1.5c-2.244 0-3.72-.952-4.609-2.187-.861-1.196-1.141-2.61-1.141-3.563V6.31l-3.72 3.72a.75.75 0 0 1-1.06 0Z" clipRule="evenodd"/>
    </svg>
  );
}
