import type { IconProps } from "../../../shared/types";

export function LinkPlusIcon({
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
      <path d="m9 15 6-6m-4-3 .463-.536a5 5 0 0 1 7.072 0 4.993 4.993 0 0 1-.001 7.072m-5.931 5.998a5.07 5.07 0 0 1-7.127 0 4.97 4.97 0 0 1 0-7.071L6 11m10 8h6m-3-3v6"/>
    </svg>
  );
}
