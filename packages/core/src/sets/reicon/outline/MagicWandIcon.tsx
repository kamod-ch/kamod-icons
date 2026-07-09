import type { IconProps } from "../../../shared/types";

export function MagicWandIcon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m3.333 20.667 9.673-9.673M11.79 2.667l3.72 2.428 4.11-1.686-1.16 4.288 2.873 3.387-4.436.22-2.333 3.781-1.58-4.15-4.317-1.05 3.459-2.789z"/>
    </svg>
  );
}
