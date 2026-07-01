import type { IconProps } from "../../../shared/types";

export function BrandCloudflareIcon({
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
      <path d="M13.031 7.007C15.5 7 16.326 8.3 17 10c4 0 4.994 3.825 5 6H2c-.001-1.64 1.36-2.954 3-3 0-1.5 1-3 3-3 .66-1.942 2.562-2.986 5.031-2.993M12 13h6m-1-3-2.5 6"/>
    </svg>
  );
}
