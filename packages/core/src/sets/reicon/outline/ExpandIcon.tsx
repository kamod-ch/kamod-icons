import type { IconProps } from "../../../shared/types";

export function ExpandIcon({
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
      <path fill="currentColor" d="M.75 3.5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H2.25V9.5a.75.75 0 0 1-1.5 0zm15 0a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V4.25H16.5a.75.75 0 0 1-.75-.75ZM1.5 13.75a.75.75 0 0 1 .75.75v5.25H7.5a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 .75-.75Zm21 0a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1 0-1.5h5.25V14.5a.75.75 0 0 1 .75-.75Z"/>
    </svg>
  );
}
