import type { IconProps } from "../../shared/types";

export function TransferScheduledIcon({
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
      <path d="M2 21h20M5 21V9m14 12V9M2 9h20M5 9l5.5-5.5h3L19 9M9 15a3 3 0 1 0 6 0 3 3 0 1 0-6 0m3-3v3m0 0h2.5"/>
    </svg>
  );
}
