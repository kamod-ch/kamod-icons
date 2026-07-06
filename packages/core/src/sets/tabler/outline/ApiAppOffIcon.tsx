import type { IconProps } from "../../../shared/types";

export function ApiAppOffIcon({
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
      <path d="M12 15H5.5a2.5 2.5 0 1 1 0-5H6m9 5v3.5a2.5 2.5 0 1 1-5 0V18m3-9h5.5a2.5 2.5 0 1 1 0 5H18m-9-2V9m.042-3.957A2.5 2.5 0 0 1 14 5.5V6M3 3l18 18"/>
    </svg>
  );
}
