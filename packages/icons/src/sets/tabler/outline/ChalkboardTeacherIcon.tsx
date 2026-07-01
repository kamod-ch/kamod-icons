import type { IconProps } from "../../../shared/types";

export function ChalkboardTeacherIcon({
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
      <path d="M8 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1"/><path d="M12 14a2 2 0 1 0 4.001-.001A2 2 0 0 0 12 14m5 5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2"/>
    </svg>
  );
}
