import type { IconProps } from "../../shared/types";

export function VolumeUpIcon({
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
      <path d="M3 9h5l5-5v16l-5-5H3Zm14-.46a4 4 0 0 1 0 6.92"/><path d="M18.5 5.94a7 7 0 0 1 0 12.12"/>
    </svg>
  );
}
