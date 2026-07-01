import type { IconProps } from "../../../shared/types";

export function TirIcon({
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
      <path d="M3 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0m12 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M7 18h8m4 0h2v-6a5 7 0 0 0-5-7h-1l1.5 7H21m-9 6V5h3M3 17v-5h9"/>
    </svg>
  );
}
