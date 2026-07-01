import type { IconProps } from "../../../shared/types";

export function BrandDropboxIcon({
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
      <path d="M7.5 10.625 3 7.812 7.5 5 12 7.813m-4.5 2.812L12 7.812m-4.5 2.813L3 13.448l4.5 2.802m0-5.625 4.5 2.823m0-5.636 4.5 2.791L21 7.791 16.5 5zM7.5 16.25l4.5-2.802M7.5 16.25v1.123L12 20l4.5-2.627V16.25M12 13.449l4.5-2.823 4.5 2.823-4.5 2.802M12 13.449l4.5 2.802"/>
    </svg>
  );
}
