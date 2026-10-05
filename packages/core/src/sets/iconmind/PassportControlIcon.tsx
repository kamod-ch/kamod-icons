import type { IconProps } from "../../shared/types";

export function PassportControlIcon({
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
      <path d="M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Zm4-2v15"/><path d="M12 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-2.5 9a4.5 4.5 0 0 1 9 0"/>
    </svg>
  );
}
