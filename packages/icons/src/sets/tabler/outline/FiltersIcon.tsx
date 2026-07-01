import type { IconProps } from "../../../shared/types";

export function FiltersIcon({
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
      <path d="M7 8a5 5 0 1 0 10 0A5 5 0 1 0 7 8"/><path d="M8 11a5 5 0 1 0 3.998 1.997"/><path d="M12.002 19.003A5 5 0 1 0 16 11"/>
    </svg>
  );
}
