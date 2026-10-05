import type { IconProps } from "../../shared/types";

export function MagicLinkIcon({
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
      <path d="M14 2h2.5a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3H10m2 13v6m0-3h3m-3 3h2.5"/><path d="M8 8.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m2.5 0H15"/>
    </svg>
  );
}
