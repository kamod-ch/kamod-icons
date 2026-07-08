import type { IconProps } from "../../../shared/types";

export function Flag7Icon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M5 4.333h10c.736 0 1.333.598 1.333 1.334v6.666H5"/><path d="M16.333 7.667H19c.736 0 1.333.597 1.333 1.333v5.333c0 .736-.597 1.334-1.333 1.334h-4.667A1.334 1.334 0 0 1 13 14.333v-2m.39 2.943 2.943-2.943M5 2.333v19.334"/></g>
    </svg>
  );
}
