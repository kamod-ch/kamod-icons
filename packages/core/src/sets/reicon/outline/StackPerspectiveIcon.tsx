import type { IconProps } from "../../../shared/types";

export function StackPerspectiveIcon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4.333 16.333-1.122.375a.666.666 0 0 1-.878-.632v-8.15c0-.455.446-.777.878-.633l1.122.375m5.334 11.165-1.078.45a.667.667 0 0 1-.922-.616V5.333c0-.476.484-.798.922-.616l1.078.45m4.28-2.731 6.946 3.205c.472.218.775.691.775 1.211v10.293c0 .52-.303.994-.775 1.211l-6.946 3.205a.667.667 0 0 1-.947-.605V3.04c0-.486.504-.809.947-.605"/>
    </svg>
  );
}
