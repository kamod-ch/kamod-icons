import type { IconProps } from "../../shared/types";

export function StampCollectingIcon({
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
      <path d="M4 5h16v14H4Zm0 0"/><path d="M8 9h8v6H8ZM3 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 6a1 1 0 1 0 2 0 1 1 0 1 0-2 0m16-3a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
