import type { IconProps } from "../../shared/types";

export function TakeawayIcon({
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
      <path d="M6 11v9h12v-9Zm0 0 3-3h6l3 3m-8-3a2 2 0 0 1 4 0"/>
    </svg>
  );
}
