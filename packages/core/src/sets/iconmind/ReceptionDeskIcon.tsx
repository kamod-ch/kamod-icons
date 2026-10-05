import type { IconProps } from "../../shared/types";

export function ReceptionDeskIcon({
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
      <path d="M2 13h20M4 13v7h16v-7M8 10a4 4 0 0 1 8 0m-4-4.5V8"/>
    </svg>
  );
}
