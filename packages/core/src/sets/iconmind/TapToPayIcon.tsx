import type { IconProps } from "../../shared/types";

export function TapToPayIcon({
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
      <path d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Zm1 2h18"/><path d="M10 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M8.24 13.63a4 4 0 0 1 7.5 0"/>
    </svg>
  );
}
