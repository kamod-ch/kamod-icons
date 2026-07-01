import type { IconProps } from "../../../shared/types";

export function ArrowSharpTurnLeftIcon({
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
      <path d="M17 18V6.69a.7.7 0 0 0-1.195-.495L6 16"/><path d="M11 16H6v-5"/>
    </svg>
  );
}
