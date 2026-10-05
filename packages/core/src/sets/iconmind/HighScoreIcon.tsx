import type { IconProps } from "../../shared/types";

export function HighScoreIcon({
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
      <path d="M4 4v16h16V4Zm3 5h10M7 13h7m-7 4h8"/><path d="m15 7 2-2 2 2"/>
    </svg>
  );
}
