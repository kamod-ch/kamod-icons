import type { IconProps } from "../../shared/types";

export function BirdIcon({
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
      <path d="M12 8a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/><path d="M6 18c0-5 4-8 8-7 3 1 4 4 2 7ZM18 6l3 3h-3ZM6 18l-3 3"/>
    </svg>
  );
}
