import type { IconProps } from "../../../shared/types";

export function ListCheckIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M8.207 3.793a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 0 1-1.414 0l-1.5-1.5a1 1 0 0 1 1.414-1.414L5 5.586l1.793-1.793a1 1 0 0 1 1.414 0m0 6a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 0 1-1.414 0l-1.5-1.5a1 1 0 0 1 1.414-1.414l.793.793 1.793-1.793a1 1 0 0 1 1.414 0m0 6a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 0 1-1.414 0l-1.5-1.5a1 1 0 0 1 1.414-1.414l.793.793 1.793-1.793a1 1 0 0 1 1.414 0M21 6a1 1 0 0 1-1 1h-9a1 1 0 0 1 0-2h9a1 1 0 0 1 1 1m0 6a1 1 0 0 1-1 1h-9a1 1 0 0 1 0-2h9a1 1 0 0 1 1 1m0 6a1 1 0 0 1-1 1h-9a1 1 0 0 1 0-2h9a1 1 0 0 1 1 1"/>
    </svg>
  );
}
