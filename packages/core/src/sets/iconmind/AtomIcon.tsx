import type { IconProps } from "../../shared/types";

export function AtomIcon({
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
      <path d="M10 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M3 12a9 4 0 1 1 18 0 9 4 0 1 1-18 0"/><path d="M12 3a4 9 0 1 1 0 18 4 9 0 1 1 0-18"/>
    </svg>
  );
}
