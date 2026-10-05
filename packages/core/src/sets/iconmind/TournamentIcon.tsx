import type { IconProps } from "../../shared/types";

export function TournamentIcon({
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
      <path d="M8 4h8v5c0 3-1.5 5-4 5s-4-2-4-5Zm4 10v4m-4 0h8M6 21h12"/>
    </svg>
  );
}
