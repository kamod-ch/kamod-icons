import type { IconProps } from "../../../shared/types";

export function Device3dLensIcon({
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
      <path d="M18.005 14.64A3.98 3.98 0 0 0 19 12m-7-8v16"/><path d="M15 5v14a7 7 0 0 0 0-14M9 5v14A7 7 0 0 1 9 5"/>
    </svg>
  );
}
