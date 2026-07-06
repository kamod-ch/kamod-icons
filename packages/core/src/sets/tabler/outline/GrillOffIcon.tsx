import type { IconProps } from "../../../shared/types";

export function GrillOffIcon({
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
      <path d="M8 8H5a6 6 0 0 0 6 6h2q.473 0 .926-.071m2.786-1.214a5.99 5.99 0 0 0 2.284-4.49V8h-7m6.831 10.815a2 2 0 1 1-2.663-2.633M9 14l-3 6m9-2H7m8-13V4m-3 1V4M9 5V4M3 3l18 18"/>
    </svg>
  );
}
