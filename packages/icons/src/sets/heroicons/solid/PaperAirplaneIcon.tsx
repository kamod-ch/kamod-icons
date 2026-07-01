import type { IconProps } from "../../../shared/types";

export function PaperAirplaneIcon({
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
      <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.5 60.5 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.5 60.5 0 0 0 3.478 2.404"/>
    </svg>
  );
}
