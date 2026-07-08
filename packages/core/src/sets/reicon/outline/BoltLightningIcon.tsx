import type { IconProps } from "../../../shared/types";

export function BoltLightningIcon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9.667 21.667 2.666-9.334H5.955a.666.666 0 0 1-.626-.896l3.178-8.666a.67.67 0 0 1 .625-.438h5.56c.47 0 .79.471.621.908l-1.98 5.092h5c.55 0 .863.627.534 1.067z"/>
    </svg>
  );
}
