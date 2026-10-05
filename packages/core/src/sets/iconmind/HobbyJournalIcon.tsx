import type { IconProps } from "../../shared/types";

export function HobbyJournalIcon({
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
      <path d="M5 3v18h14V3Zm3 0v18"/><path d="M16 3v9l-2-2-2 2V3m-1 13h6"/>
    </svg>
  );
}
