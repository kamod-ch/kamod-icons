import type { IconProps } from "../../shared/types";

export function FeelsLikeIcon({
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
      <path d="M9.5 15V6a2.5 2.5 0 0 1 5 0v9a4.5 4.5 0 1 1-5 0"/><path d="M10 17.5a2 2 0 1 0 4 0 2 2 0 1 0-4 0M12 9v6m5-9a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-1 8a3 3 0 0 1 6 0M3 20h4"/>
    </svg>
  );
}
