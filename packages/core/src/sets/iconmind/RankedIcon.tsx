import type { IconProps } from "../../shared/types";

export function RankedIcon({
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
      <path d="M12 3s4 2 8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6c4-1 8-3 8-3"/><path d="m8 13 4-4 4 4m-8 3h8"/>
    </svg>
  );
}
