import type { IconProps } from "../../../shared/types";

export function Stack3Icon({
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
      <path d="M12 2 4 6l8 4 8-4zm-8 8 8 4 8-4M4 18l8 4 8-4M4 14l8 4 8-4"/>
    </svg>
  );
}
