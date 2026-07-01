import type { IconProps } from "../../shared/types";

export function VectorSquareIcon({
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
      <path d="M19.5 7a24 24 0 0 1 0 10M4.5 7a24 24 0 0 0 0 10M7 19.5a24 24 0 0 0 10 0M7 4.5a24 24 0 0 1 10 0"/><rect x="17" y="17" rx="1"/><rect x="17" y="2" rx="1"/><rect x="2" y="17" rx="1"/><rect x="2" y="2" rx="1"/>
    </svg>
  );
}
