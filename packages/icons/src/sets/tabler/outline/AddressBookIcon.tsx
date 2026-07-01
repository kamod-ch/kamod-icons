import type { IconProps } from "../../../shared/types";

export function AddressBookIcon({
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
      <path d="M20 6v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2M10 16h6"/><path d="M11 11a2 2 0 1 0 4 0 2 2 0 1 0-4 0M4 8h3m-3 4h3m-3 4h3"/>
    </svg>
  );
}
