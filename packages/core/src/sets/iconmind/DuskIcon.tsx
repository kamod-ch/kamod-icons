import type { IconProps } from "../../shared/types";

export function DuskIcon({
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
      <path d="M6 19a6 6 0 0 1 12 0M2 19h20M19 8v6m-2.5-2.5L19 14l2.5-2.5"/>
    </svg>
  );
}
