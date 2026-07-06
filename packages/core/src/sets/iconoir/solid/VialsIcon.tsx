import type { IconProps } from "../../../shared/types";

export function VialsIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M21.75 21a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h18a.75.75 0 0 1 .75.75m-12-18A.75.75 0 0 0 9 2.25H5a.75.75 0 0 0-.75.75v13a2.75 2.75 0 1 0 5.5 0zm-1.5.75v7.5h-2.5v-7.5zM19.75 3a.75.75 0 0 0-.75-.75h-4a.75.75 0 0 0-.75.75v13a2.75 2.75 0 1 0 5.5 0zm-1.5.75v7.5h-2.5v-7.5z" clipRule="evenodd"/>
    </svg>
  );
}
