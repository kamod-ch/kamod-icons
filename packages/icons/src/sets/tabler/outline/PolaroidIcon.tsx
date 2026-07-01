import type { IconProps } from "../../../shared/types";

export function PolaroidIcon({
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
      <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm0 10h16"/><path d="m4 12 3-3c.928-.893 2.072-.893 3 0l4 4"/><path d="m13 12 2-2c.928-.893 2.072-.893 3 0l2 2m-6-5h.01"/>
    </svg>
  );
}
