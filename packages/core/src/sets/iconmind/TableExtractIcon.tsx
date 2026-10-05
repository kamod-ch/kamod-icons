import type { IconProps } from "../../shared/types";

export function TableExtractIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M14 3h5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h5M2 8h20M9 8v7m6-7v7m-9 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2 2 2 0 0 1-2 2H8a2 2 0 0 1-2-2"/>
    </svg>
  );
}
