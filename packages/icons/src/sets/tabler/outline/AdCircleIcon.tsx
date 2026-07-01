import type { IconProps } from "../../../shared/types";

export function AdCircleIcon({
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
      <path d="M2 12a10 10 0 1 0 20 0 10 10 0 1 0-20 0"/><path d="M7 15v-4.5a1.5 1.5 0 0 1 3 0V15m-3-2h3m4-4v6h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2z"/>
    </svg>
  );
}
