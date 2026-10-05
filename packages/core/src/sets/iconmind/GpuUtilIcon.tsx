import type { IconProps } from "../../shared/types";

export function GpuUtilIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M14 7h5a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4l3-3h5"/><path d="M5 12a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2 2 2 0 0 1-2 2H7a2 2 0 0 1-2-2"/>
    </svg>
  );
}
