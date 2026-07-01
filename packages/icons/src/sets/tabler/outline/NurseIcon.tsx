import type { IconProps } from "../../../shared/types";

export function NurseIcon({
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
      <path d="M12 5c2.941 0 6.685 1.537 9 3l-2 11H5L3 8c2.394-1.513 6.168-3.005 9-3m-2 7h4m-2-2v4"/>
    </svg>
  );
}
