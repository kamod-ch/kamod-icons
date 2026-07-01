import type { IconProps } from "../../../shared/types";

export function DataTransferWarningIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 4v1m0 4v1m10 2V4m0 0 3 3m-3-3-3 3m6 9v2m0 4.01.01-.011M7 14v6m0 0 3-3m-3 3-3-3"/>
    </svg>
  );
}
