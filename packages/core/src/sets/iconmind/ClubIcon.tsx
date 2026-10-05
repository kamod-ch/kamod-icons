import type { IconProps } from "../../shared/types";

export function ClubIcon({
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
      <path d="M12 3s4 2 8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6c4-1 8-3 8-3"/><path d="M10 10a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-1 6a3 3 0 0 1 6 0"/>
    </svg>
  );
}
