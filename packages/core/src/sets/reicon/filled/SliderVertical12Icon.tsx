import type { IconProps } from "../../../shared/types";

export function SliderVertical12Icon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" d="M18.94 3.5H5.06c-.41 0-.75-.34-.75-.75S4.65 2 5.06 2h13.88c.41 0 .75.34.75.75s-.34.75-.75.75Zm0 18.5H5.06c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h13.88c.41 0 .75.34.75.75s-.34.75-.75.75ZM2.75 8v8c0 1.66 1.34 3 3 3h12.5c1.66 0 3-1.34 3-3V8c0-1.66-1.34-3-3-3H5.75c-1.66 0-3 1.34-3 3Z"/>
    </svg>
  );
}
