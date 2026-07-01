import type { IconProps } from "../../../shared/types";

export function FoldersIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M12 2a1 1 0 0 1 .707.293L14.415 4H19a3 3 0 0 1 2.995 2.824L22 7v7a3 3 0 0 1-3 3h-1v1a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h1V5a3 3 0 0 1 3-3zM6 8H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1H9a3 3 0 0 1-3-3z"/>
    </svg>
  );
}
