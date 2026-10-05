import type { IconProps } from "../../shared/types";

export function LineageTableIcon({
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
      <path d="M2 5a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Zm0 11a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Zm11.5-5.5a2 2 0 0 1 2-2H20a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2Zm-5-4H11V12h2.5m-5 5.5H11V12"/>
    </svg>
  );
}
