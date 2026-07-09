import type { IconProps } from "../../../shared/types";

export function PenNib3Icon({
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
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path fill="none" d="M13.333 12.727 6.76 19.3m-4.276-1.123c-1.069-1.059-1.383-1.994-1.448-2.705-.232-2.565 2.633-3.935 2.615-6.797-.012-1.836-1.206-3.322-2.179-4.27m18.849 6.338L18.2 16.737a1.33 1.33 0 0 1-.987.86L7.67 19.572a1 1 0 0 1-1.181-1.181l1.975-9.543c.094-.457.421-.83.86-.987l5.994-2.122"/><path fill="none" d="m15.328 3.061-.401.402a1.33 1.33 0 0 0 0 1.885l2.892 2.892 2.892 2.892a1.33 1.33 0 0 0 1.885 0l.401-.401"/><path fill="currentColor" d="M13.333 13.727a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></g>
    </svg>
  );
}
