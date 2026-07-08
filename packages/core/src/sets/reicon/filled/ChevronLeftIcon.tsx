import type { IconProps } from "../../../shared/types";

export function ChevronLeftIcon({
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
      <path fill="currentColor" strokeWidth="1.333" d="M15.333 21.333a1 1 0 0 1-.706-.293l-8.334-8.333a1 1 0 0 1 0-1.415l8.334-8.332a1 1 0 1 1 1.414 1.415L8.415 12l7.626 7.627a1 1 0 0 1-.706 1.708Z"/>
    </svg>
  );
}
