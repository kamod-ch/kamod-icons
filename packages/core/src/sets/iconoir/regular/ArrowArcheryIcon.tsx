import type { IconProps } from "../../../shared/types";

export function ArrowArcheryIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m8.611 15.89 12.02-12.022M8.612 15.89H5.783l-2.829 2.829h2.829v2.828l2.828-2.828zm12.02-12.02h-2.828m2.829 0v2.828"/>
    </svg>
  );
}
