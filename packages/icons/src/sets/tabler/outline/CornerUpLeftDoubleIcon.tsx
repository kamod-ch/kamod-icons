import type { IconProps } from "../../../shared/types";

export function CornerUpLeftDoubleIcon({
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
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M19 18v-6a3 3 0 0 0-3-3H9"/><path d="M13 13 9 9l4-4m-5 8L4 9l4-4"/>
    </svg>
  );
}
