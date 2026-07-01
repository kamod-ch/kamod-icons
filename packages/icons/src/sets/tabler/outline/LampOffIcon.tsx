import type { IconProps } from "../../../shared/types";

export function LampOffIcon({
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
      <path d="M9 20h6m-3 0v-8M7.325 7.35 5 12h7m4 0h3l-4-8H9l-.338.676M3 3l18 18"/>
    </svg>
  );
}
