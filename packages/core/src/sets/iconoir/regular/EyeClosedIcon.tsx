import type { IconProps } from "../../../shared/types";

export function EyeClosedIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m19.5 16-2.475-3.396M12 17.5V14m-7.5 2 2.469-3.388M3 8c3.6 8 14.4 8 18 0"/>
    </svg>
  );
}
