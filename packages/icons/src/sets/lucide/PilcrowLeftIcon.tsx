import type { IconProps } from "../../shared/types";

export function PilcrowLeftIcon({
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
      <path d="M14 3v11m0-5h-3a3 3 0 0 1 0-6h9m-2 0v11m4 4H2l4-4m0 8-4-4"/>
    </svg>
  );
}
