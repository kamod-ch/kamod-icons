import type { IconProps } from "../../shared/types";

export function LostLuggageIcon({
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
      <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6-2V3h6v3m-3 6v3"/><path d="M11 18a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-1.5-7.5a2.5 2.5 0 0 1 5 0"/>
    </svg>
  );
}
