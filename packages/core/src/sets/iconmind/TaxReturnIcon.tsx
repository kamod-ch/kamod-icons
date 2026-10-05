import type { IconProps } from "../../shared/types";

export function TaxReturnIcon({
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
      <path d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Zm4-2v18"/><path d="M10.5 9.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M11 15l6-6m-1.5 5.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
