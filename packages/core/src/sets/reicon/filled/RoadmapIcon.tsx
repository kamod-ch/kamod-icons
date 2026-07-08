import type { IconProps } from "../../../shared/types";

export function RoadmapIcon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="M17.333 12.333v-6a3.67 3.67 0 0 0-3.666-3.666H6.059c-.797 0-1.53.399-1.96 1.066L.827 8.79a1 1 0 0 0 0 1.086L4.1 14.935A2.33 2.33 0 0 0 6.06 16h7.608a3.67 3.67 0 0 0 3.666-3.667Z"/><path d="m23.173 14.123-2-3.09a1.001 1.001 0 0 0-1.68 1.087l1.649 2.547-2.92 4.513a.34.34 0 0 1-.28.153h-7.609c-.577 0-1.106-.314-1.415-.84a1 1 0 1 0-1.724 1.014c.672 1.143 1.846 1.826 3.14 1.826h7.607c.794 0 1.526-.398 1.96-1.066l3.272-5.057a1 1 0 0 0 0-1.087Z"/></g>
    </svg>
  );
}
