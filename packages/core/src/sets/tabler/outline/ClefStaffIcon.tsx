import type { IconProps } from "../../../shared/types";

export function ClefStaffIcon({
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
      <path d="M15 15h6m-6-4h6m-10 8h10m-10-7a4.16 4.16 0 0 1-5.62 3.89A3.78 3.78 0 0 1 3 12.5a3.42 3.42 0 0 1 2.34-3.38L9.13 7.7A2.89 2.89 0 0 0 11 5a2 2 0 0 0-2-2 2 2 0 0 0-2 2v14a2 2 0 0 1-2 2 2 2 0 0 1-2-2"/>
    </svg>
  );
}
