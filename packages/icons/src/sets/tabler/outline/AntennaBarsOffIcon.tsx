import type { IconProps } from "../../../shared/types";

export function AntennaBarsOffIcon({
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
      <path d="M6 18v-3m4 3v-6m4 6v-4m0-4V9m4 5V6M3 3l18 18"/>
    </svg>
  );
}
