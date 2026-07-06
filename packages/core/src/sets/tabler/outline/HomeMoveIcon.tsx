import type { IconProps } from "../../../shared/types";

export function HomeMoveIcon({
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
      <path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2"/><path d="M19 12h2l-9-9-9 9h2v7a2 2 0 0 0 2 2h5.5m3.5-2h6m-3-3 3 3-3 3"/>
    </svg>
  );
}
