import type { IconProps } from "../../shared/types";

export function TimeShiftIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M15.38 6.75a8 8 0 1 1-6.76 0M12 3v3M9 3h6m-6 8v6m0-3h6"/><path d="M12.5 11.5 15 14l-2.5 2.5"/>
    </svg>
  );
}
