import type { IconProps } from "../../shared/types";

export function FamilyRoomIcon({
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
      <path d="M2 18v-8h10v8M2 13.5h10M4 10V7h4v3m7 8v-5h7v5m-7-2.5h7"/>
    </svg>
  );
}
