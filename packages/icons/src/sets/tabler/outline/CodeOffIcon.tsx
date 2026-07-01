import type { IconProps } from "../../../shared/types";

export function CodeOffIcon({
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
      <path d="m7 8-4 4 4 4m10-8 4 4-2.5 2.5M14 4l-1.201 4.805m-.802 3.207-2 7.988M3 3l18 18"/>
    </svg>
  );
}
