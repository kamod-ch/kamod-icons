import type { IconProps } from "../../shared/types";

export function BugOffIcon({
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
      <path d="M12 20v-8m.656-5H14a4 4 0 0 1 4 4v1.344M14.12 3.88 16 2m1.123 15.123A6 6 0 0 1 6 14v-3a4 4 0 0 1 1.72-3.287M2 2l20 20"/><path d="M21 5a4 4 0 0 1-3.55 3.97M22 13h-3.344M3 21a4 4 0 0 1 3.81-4M3 5a4 4 0 0 0 3.55 3.97M6 13H2M8 2l1.88 1.88m-.168.18A3 3 0 0 1 15 6v1.13"/>
    </svg>
  );
}
