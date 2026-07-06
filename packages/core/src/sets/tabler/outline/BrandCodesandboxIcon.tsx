import type { IconProps } from "../../../shared/types";

export function BrandCodesandboxIcon({
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
      <path d="M20 7.5v9l-4 2.25L12 21l-4-2.25-4-2.25v-9l4-2.25L12 3l4 2.25zM12 12l4-2.25 4-2.25M12 12v9m0-9L8 9.75 4 7.5"/><path d="m20 12-4 2v4.75M4 12l4 2v4.75m0-13.5 4 2.25 4-2.25"/>
    </svg>
  );
}
