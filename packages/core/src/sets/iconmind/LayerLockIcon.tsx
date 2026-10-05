import type { IconProps } from "../../shared/types";

export function LayerLockIcon({
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
      <path d="M4 3.5A1.5 1.5 0 0 1 5.5 2h13A1.5 1.5 0 0 1 20 3.5 1.5 1.5 0 0 1 18.5 5h-13A1.5 1.5 0 0 1 4 3.5M8.5 15a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2.5a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2Zm1-2a2.5 2.5 0 0 1 5 0"/>
    </svg>
  );
}
