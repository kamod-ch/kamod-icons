import type { IconProps } from "../../shared/types";

export function ReleaseTagIcon({
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
      <path d="m2 12 7-7h12v14H9Z"/><path d="M6 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0m5-2h7m-7 4h5"/>
    </svg>
  );
}
