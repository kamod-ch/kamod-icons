import type { IconProps } from "../../../shared/types";

export function Stack2Icon({
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
      <path d="M12 4 4 8l8 4 8-4zm-8 8 8 4 8-4M4 16l8 4 8-4"/>
    </svg>
  );
}
