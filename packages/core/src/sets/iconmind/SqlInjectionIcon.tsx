import type { IconProps } from "../../shared/types";

export function SqlInjectionIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M4 6a8 3 0 0 1 16 0v12a8 3 0 0 1-16 0Z"/><path d="M14 8.5 11.5 11H14l-2.5 2.5"/>
    </svg>
  );
}
