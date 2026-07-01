import type { IconProps } from "../../../shared/types";

export function DeviceIpadOffIcon({
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
      <path d="M6 2h12a2 2 0 0 1 2 2v12m0 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4m5 15h6M3 3l18 18"/>
    </svg>
  );
}
