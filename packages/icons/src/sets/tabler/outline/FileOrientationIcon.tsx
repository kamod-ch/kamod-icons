import type { IconProps } from "../../../shared/types";

export function FileOrientationIcon({
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
      <path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M10 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v2m-6 10h5a2 2 0 0 0 2-2v-5"/><path d="m15 22-2-2 2-2m3-3 2-2 2 2"/>
    </svg>
  );
}
