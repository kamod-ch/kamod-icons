import type { IconProps } from "../../shared/types";

export function BookClubIcon({
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
      <path d="M6 12a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Zm3-2v11M3 5a3 3 0 1 0 6 0 3 3 0 1 0-6 0m12 0a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/>
    </svg>
  );
}
