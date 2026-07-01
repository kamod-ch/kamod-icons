import type { IconProps } from "../../../shared/types";

export function OmegaIcon({
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
      <path d="M4 19h5v-1a7.35 7.35 0 1 1 6 0v1h5"/>
    </svg>
  );
}
