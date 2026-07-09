import type { IconProps } from "../../../shared/types";

export function House2Icon({
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
      <path fill="currentColor" strokeWidth="1.333" d="M10.588 1.817a2.33 2.33 0 0 1 2.824 0l7 5.32c.581.442.921 1.13.921 1.858V19a3.666 3.666 0 0 1-3.666 3.667H13v-4.334a1 1 0 0 0-2 0v4.334H6.333A3.666 3.666 0 0 1 2.667 19V8.995c0-.73.34-1.417.922-1.858z"/>
    </svg>
  );
}
