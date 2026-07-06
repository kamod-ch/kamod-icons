import type { IconProps } from "../../../shared/types";

export function DialpadOffIcon({
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
      <path d="M7 7H3V3m14 0h4v4h-4zm-7 3V3h4v4h-3m-8 3h4v4H3zm14 3v-3h4v4h-3m-4 0h-4v-4m0 7h4v4h-4zM3 3l18 18"/>
    </svg>
  );
}
