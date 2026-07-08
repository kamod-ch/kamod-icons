import type { IconProps } from "../../../shared/types";

export function BugSlashIcon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 7.667V6a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v1.667m-3 12.666V17"/><path d="M6.892 17.124a5.6 5.6 0 0 1-.559-2.457v-4.334A2.666 2.666 0 0 1 9 7.667h6c.39 0 .763.084 1.097.236m1.57 4.087v2.677A5.667 5.667 0 0 1 12 20.333h0c-.78 0-1.524-.157-2.2-.443M6.333 13h-4"/><path d="M6.333 9.667A3.666 3.666 0 0 1 2.667 6m15 7h4m-4 3.333A3.666 3.666 0 0 1 21.333 20M2.667 21.333 21.333 2.667"/></g>
    </svg>
  );
}
