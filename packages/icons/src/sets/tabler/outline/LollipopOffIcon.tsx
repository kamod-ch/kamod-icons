import type { IconProps } from "../../../shared/types";

export function LollipopOffIcon({
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
      <path d="M7.462 7.493a7 7 0 0 0 9.06 9.039m2.416-1.57a7 7 0 1 0-9.884-9.915"/><path d="M21 10a3.5 3.5 0 0 0-7 0m-1.29 2.715A3.5 3.5 0 0 1 7 10m7 7c.838 0 1.607-.294 2.209-.785M17.5 13.5A3.5 3.5 0 0 0 14 10m0-7a3.5 3.5 0 0 0-3.5 3.5M3 21l6-6M3 3l18 18"/>
    </svg>
  );
}
