import type { IconProps } from "../../../shared/types";

export function MacroIcon({
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
      <path d="M6 15a6 6 0 1 0 12 0"/><path d="M18 15a6 6 0 0 0-6 6m0 0a6 6 0 0 0-6-6m6 6V11m0 0a5 5 0 0 1-5-5V3l3 2 2-2 2 2 3-2v3a5 5 0 0 1-5 5"/>
    </svg>
  );
}
