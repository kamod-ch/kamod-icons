import type { IconProps } from "../../../shared/types";

export function ChatRoundDotsIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22Z"/><path fill="currentColor" d="M15 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm-4 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm-4 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"/>
    </svg>
  );
}
