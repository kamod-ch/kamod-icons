import type { IconProps } from "../../../shared/types";

export function BoldOffIcon({
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
      <path d="M9 5h4a3.5 3.5 0 0 1 2.222 6.204M12 12H7V7m10.107 10.112A3.5 3.5 0 0 1 14 19H7v-7M3 3l18 18"/>
    </svg>
  );
}
