import type { IconProps } from "../../../shared/types";

export function STurnDownIcon({
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
      <path d="M7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/><path d="M5 7v9.5a3.5 3.5 0 0 0 7 0v-9a3.5 3.5 0 0 1 7 0V21"/><path d="m16 18 3 3 3-3"/>
    </svg>
  );
}
