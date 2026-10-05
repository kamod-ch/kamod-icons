import type { IconProps } from "../../shared/types";

export function EnergySavingIcon({
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
      <path d="M6 10a6 6 0 0 1 12 0M8 10v6h8v-6m-7 9h6"/><path d="M9 13c0-3.6 2.4-6 6-6 0 3.6-2.4 6-6 6"/>
    </svg>
  );
}
