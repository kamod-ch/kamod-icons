import type { IconProps } from "../../../shared/types";

export function Pointer2Icon({
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
      <path d="m14.185 13.14 5.644-2.202c1.625-.634 1.538-2.962-.13-3.473L5.38 3.083c-1.41-.431-2.73.888-2.298 2.298l4.382 14.318c.51 1.668 2.84 1.755 3.473.13l2.202-5.644a1.84 1.84 0 0 1 1.045-1.045"/>
    </svg>
  );
}
