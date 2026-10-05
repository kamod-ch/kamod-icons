import type { IconProps } from "../../shared/types";

export function MessageQueueIcon({
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
      <path d="M2 8a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Zm10 0a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2Zm7 1 3 3-3 3"/>
    </svg>
  );
}
