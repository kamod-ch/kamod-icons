import type { IconProps } from "../../../shared/types";

export function WindowChartLineIcon({
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
      <path fill="currentColor" strokeWidth="1.333" d="M19 2.667H5a3.67 3.67 0 0 0-3.667 3.666v11.334A3.67 3.67 0 0 0 5 21.333h14a3.67 3.67 0 0 0 3.667-3.666V6.333A3.67 3.67 0 0 0 19 2.667ZM9.333 5.333a1.334 1.334 0 1 1 0 2.668 1.334 1.334 0 0 1 0-2.668ZM4 6.667a1.334 1.334 0 1 1 2.668 0 1.334 1.334 0 0 1-2.668 0Zm14.561 1.446-3 6a1 1 0 0 1-.856.552.99.99 0 0 1-.896-.485l-1.121-1.87-1.819 3.185a.998.998 0 0 1-1.649.128l-.587-.734-1.546 1.767a1 1 0 1 1-1.506-1.317l2.334-2.667a1.04 1.04 0 0 1 .774-.341c.296.006.574.144.759.374l.415.519 1.936-3.39a1 1 0 0 1 .858-.503c.327 0 .686.181.868.485l1.063 1.77 2.185-4.37a1 1 0 0 1 1.788.895z"/>
    </svg>
  );
}
