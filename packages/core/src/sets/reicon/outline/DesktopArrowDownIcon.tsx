import type { IconProps } from "../../../shared/types";

export function DesktopArrowDownIcon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15.667 9.333 12 13 8.333 9.333M12 13V3.667M7.667 21a14.4 14.4 0 0 1 8.666 0M12 17v3.333"/><path d="M16 3.667h3a2.666 2.666 0 0 1 2.667 2.666v8A2.666 2.666 0 0 1 19 17H5a2.666 2.666 0 0 1-2.667-2.667v-8A2.666 2.666 0 0 1 5 3.667h3"/></g>
    </svg>
  );
}
