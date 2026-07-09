import type { IconProps } from "../../../shared/types";

export function WindowPointerIcon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="M19 2.667H5a3.67 3.67 0 0 0-3.667 3.666v11.334A3.67 3.67 0 0 0 5 21.333h7.099a1 1 0 0 0 0-2H5a1.67 1.67 0 0 1-1.667-1.666v-7h17.334v1.932a1 1 0 0 0 2 0V6.333A3.67 3.67 0 0 0 19 2.667ZM5.333 8a1.334 1.334 0 1 1 .001-2.668 1.334 1.334 0 0 1 0 2.668Zm4 0a1.334 1.334 0 1 1 .001-2.668 1.334 1.334 0 0 1 0 2.668Z"/><path d="m23.099 16.31-7.92-2.893a1.36 1.36 0 0 0-1.443.32 1.36 1.36 0 0 0-.316 1.442l2.893 7.92c.199.542.715.9 1.29.9h.029a1.37 1.37 0 0 0 1.277-.954l1.004-3.134 3.136-1.003a1.373 1.373 0 0 0 .05-2.597Z"/></g>
    </svg>
  );
}
