import type { IconProps } from "../../../shared/types";

export function Ironing1Icon({
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
      <path d="M16.459 5a4 4 0 0 1 3.945 3.343l1.387 8.329A2 2 0 0 1 19.82 19H3a1 1 0 0 1-1-1 8 8 0 0 1 8-8h8.652l-.22-1.329a2 2 0 0 0-1.811-1.665L16.459 7H9a1 1 0 1 1 0-2zm-4.449 9H12a1 1 0 0 0-.117 1.993l.127.007a1 1 0 0 0 0-2"/>
    </svg>
  );
}
