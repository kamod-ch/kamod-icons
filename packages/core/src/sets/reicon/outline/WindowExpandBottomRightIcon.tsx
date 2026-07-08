import type { IconProps } from "../../../shared/types";

export function WindowExpandBottomRightIcon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M14.333 3.667h3.334a2.66 2.66 0 0 1 2.666 2.666v11.334a2.66 2.66 0 0 1-2.666 2.666H6.333a2.66 2.66 0 0 1-2.666-2.666v-3.334"/><path d="M11 8.333v-2a2.67 2.67 0 0 0-2.667-2.666h-2a2.67 2.67 0 0 0-2.666 2.666v2A2.67 2.67 0 0 0 6.333 11h2A2.67 2.67 0 0 0 11 8.333m1.333 8h4v-4m0 4-3.666-3.666"/></g>
    </svg>
  );
}
