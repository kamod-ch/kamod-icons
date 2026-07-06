import type { IconProps } from "../../../shared/types";

export function BatteryVerticalExclamationIcon({
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
      <path d="M17 12V7a2 2 0 0 0-2-2h-.5c-.276 0-.5-.224-.5-.5s-.224-.5-.5-.5h-3c-.276 0-.5.224-.5.5s-.224.5-.5.5H9a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h6m4-4v3m0 3v.01"/>
    </svg>
  );
}
