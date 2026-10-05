import type { IconProps } from "../../shared/types";

export function PersonalBestIcon({
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
      <path d="M8 3h8v6l-4 4-4-4Zm4 10v7m-5 0h10M8 8.5a2.5 2.5 0 0 1 0-5m8 0a2.5 2.5 0 0 1 0 5"/>
    </svg>
  );
}
