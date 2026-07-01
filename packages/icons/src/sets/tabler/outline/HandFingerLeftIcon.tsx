import type { IconProps } from "../../../shared/types";

export function HandFingerLeftIcon({
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
      <path d="M12 8H3.5a1.5 1.5 0 0 0 0 3H11m-.5 0h-2a1.5 1.5 0 1 0 0 3H11m-1.5 0a1.5 1.5 0 0 0 0 3H11"/><path d="M10.5 17a1.5 1.5 0 0 0 0 3H15a6 6 0 0 0 6-6v-2 .208a6 6 0 0 0-2.7-5.012L18 7q-.718-.468-5.728-3.286a1.5 1.5 0 0 0-2.022.536 1.87 1.87 0 0 0 .28 2.28L12 8"/>
    </svg>
  );
}
