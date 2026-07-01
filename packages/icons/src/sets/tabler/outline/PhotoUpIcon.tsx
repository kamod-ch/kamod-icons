import type { IconProps } from "../../../shared/types";

export function PhotoUpIcon({
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
      <path d="M15 8h.01M12.5 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6.5"/><path d="m3 16 5-5c.928-.893 2.072-.893 3 0l3.5 3.5"/><path d="m14 14 1-1c.679-.653 1.473-.829 2.214-.526M19 22v-6m3 3-3-3-3 3"/>
    </svg>
  );
}
