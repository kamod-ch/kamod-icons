import type { IconProps } from "../../shared/types";

export function TickerIcon({
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
      <path d="M2 10a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Zm13 2a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0"/><path d="M5 13.5 7.5 11l2.5 2.5 2.5-2.5"/>
    </svg>
  );
}
