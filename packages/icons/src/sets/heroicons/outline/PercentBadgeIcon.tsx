import type { IconProps } from "../../../shared/types";

export function PercentBadgeIcon({
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
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.99 14.993 6-6m6 3.001a3.75 3.75 0 0 1-1.593 3.069 3.75 3.75 0 0 1-1.043 3.296 3.75 3.75 0 0 1-3.296 1.043 3.75 3.75 0 0 1-3.068 1.593c-1.268 0-2.39-.63-3.068-1.593a3.75 3.75 0 0 1-3.296-1.043 3.75 3.75 0 0 1-1.043-3.297 3.75 3.75 0 0 1-1.593-3.068c0-1.268.63-2.39 1.593-3.068a3.75 3.75 0 0 1 1.043-3.297 3.75 3.75 0 0 1 3.296-1.042 3.75 3.75 0 0 1 3.068-1.594c1.268 0 2.39.63 3.068 1.593a3.75 3.75 0 0 1 3.296 1.043 3.75 3.75 0 0 1 1.043 3.297 3.75 3.75 0 0 1 1.593 3.068M9.74 9.743h.008v.007H9.74zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0m4.125 4.5h.008v.008h-.008zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0"/>
    </svg>
  );
}
