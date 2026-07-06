import type { IconProps } from "../../../shared/types";

export function FenceIcon({
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
      <path d="M4 12v4h16v-4zm2 4v4h4v-4m0-4V6L8 4 6 6v6m8 4v4h4v-4m0-4V6l-2-2-2 2v6"/>
    </svg>
  );
}
