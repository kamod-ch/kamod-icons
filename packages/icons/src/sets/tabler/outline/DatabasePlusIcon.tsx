import type { IconProps } from "../../../shared/types";

export function DatabasePlusIcon({
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
      <path d="M4 6c0 1.657 3.582 3 8 3s8-1.343 8-3-3.582-3-8-3-8 1.343-8 3"/><path d="M4 6v6c0 1.657 3.582 3 8 3 1.075 0 2.1-.08 3.037-.224M20 12V6"/><path d="M4 12v6c0 1.657 3.582 3 8 3q.249 0 .495-.006M16 19h6m-3-3v6"/>
    </svg>
  );
}
