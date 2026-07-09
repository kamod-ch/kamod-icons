import type { IconProps } from "../../../shared/types";

export function PenWriting4Icon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="M9.115 14.552c.52-.008 3.192-.11 4.374-1.293l7-7a2.89 2.89 0 0 0 0-4.082c-1.092-1.089-2.993-1.088-4.081 0l-7 7.002c-1.183 1.181-1.284 3.837-1.293 4.357a.997.997 0 0 0 1 1.016Z"/><path fillRule="evenodd" d="M1.333 15.667a3 3 0 0 1 3-3h.781a1 1 0 0 1 0 2h-.78a1 1 0 0 0 0 2h15.333a3 3 0 0 1 0 6H17a1 1 0 0 1 0-2h2.667a1 1 0 0 0 0-2H4.333a3 3 0 0 1-3-3Z" clipRule="evenodd"/></g>
    </svg>
  );
}
