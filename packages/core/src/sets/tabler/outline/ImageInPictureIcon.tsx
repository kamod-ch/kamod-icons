import type { IconProps } from "../../../shared/types";

export function ImageInPictureIcon({
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
      <path d="M13 15c-2 0-5 1-5 5"/><path d="M4 13a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm0-6V5a1 1 0 0 1 1-1h2m4 0h2m4 0h2a1 1 0 0 1 1 1v2m0 4v2m0 4v2a1 1 0 0 1-1 1h-2"/>
    </svg>
  );
}
