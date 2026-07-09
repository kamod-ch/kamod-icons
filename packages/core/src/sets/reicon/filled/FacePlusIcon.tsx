import type { IconProps } from "../../../shared/types";

export function FacePlusIcon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="M22.381 9.59a3 3 0 0 1-2.714 1.743c-1.655 0-3-1.345-3-3V8h-.334c-1.654 0-3-1.345-3-3a3 3 0 0 1 2.486-2.948A10.6 10.6 0 0 0 12 1.333C6.119 1.333 1.333 6.12 1.333 12S6.12 22.667 12 22.667 22.667 17.88 22.667 12c0-.83-.106-1.635-.286-2.41ZM6.667 12a1.334 1.334 0 1 1 2.667 0 1.334 1.334 0 0 1-2.667 0Zm9.178 4.213c-.841 1.328-2.278 2.12-3.845 2.12s-3.004-.793-3.845-2.12a1 1 0 0 1 1.689-1.07c.472.745 1.277 1.19 2.155 1.19s1.682-.445 2.154-1.19a1 1 0 1 1 1.69 1.07Zm.155-2.88a1.334 1.334 0 1 1 0-2.667 1.334 1.334 0 0 1 0 2.667Z"/><path d="M23 4h-2.333V1.667a1 1 0 0 0-2 0V4h-2.334a1 1 0 0 0 0 2h2.334v2.333a1 1 0 0 0 2 0V6H23a1 1 0 0 0 0-2Z"/></g>
    </svg>
  );
}
