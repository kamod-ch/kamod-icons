import type { IconProps } from "../../shared/types";

export function PrintIcon({
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
      <path d="M6 5a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3 3 3 0 0 1-3 3H9a3 3 0 0 1-3-3m-4 8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Zm5 2h10"/>
    </svg>
  );
}
