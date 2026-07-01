import type { IconProps } from "../../../shared/types";

export function Badge3kIcon({
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
      <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm11 2v6"/><path d="m17 9-2 3 2 3m-2-3h-1M7 9.5a.5.5 0 0 1 .5-.5h1a1.5 1.5 0 0 1 0 3H8h.5a1.5 1.5 0 0 1 0 3h-1a.5.5 0 0 1-.5-.5"/>
    </svg>
  );
}
