import type { IconProps } from "../../../shared/types";

export function ArrowSwapHorizontal2Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="m20.5 14.99-5.01 5.02M3.5 14.99h17m-17-5.98 5.01-5.02M20.5 9.01h-17"/>
    </svg>
  );
}
