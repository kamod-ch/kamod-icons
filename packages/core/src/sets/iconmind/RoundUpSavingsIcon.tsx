import type { IconProps } from "../../shared/types";

export function RoundUpSavingsIcon({
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
      <path d="M6 9h12v10a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3Zm2 0V4h8v5m-4 3.5v6"/><path d="m9.5 15 2.5-2.5 2.5 2.5"/>
    </svg>
  );
}
