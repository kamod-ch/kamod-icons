import type { IconProps } from "../../../shared/types";

export function CommandIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M15.25 5A3.75 3.75 0 1 1 19 8.75h-2.25v6.5H19a3.75 3.75 0 1 1-3.75 3.751V16.75h-6.5v2.251a3.75 3.75 0 1 1-3.749-3.75H7.25v-6.5H5.001A3.75 3.75 0 1 1 8.751 5v2.25h6.5zm-8 2.25V5A2.25 2.25 0 1 0 5 7.25zM19 2.75A2.25 2.25 0 0 0 16.75 5v2.25H19a2.25 2.25 0 1 0 0-4.5Zm-10.25 6v6.5h6.5v-6.5zM21.25 19A2.25 2.25 0 0 0 19 16.75h-2.25V19a2.25 2.25 0 1 0 4.5 0Zm-18.5 0A2.25 2.25 0 0 1 5 16.75h2.25V19a2.25 2.25 0 1 1-4.5 0Z" clipRule="evenodd"/>
    </svg>
  );
}
