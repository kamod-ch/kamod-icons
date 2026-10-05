import type { IconProps } from "../../shared/types";

export function OperatingRoomIcon({
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
      <path d="M6 8a6 6 0 0 1 12 0m-6-6v6m-9 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm3 6h12"/>
    </svg>
  );
}
