import type { IconProps } from "../../../shared/types";

export function UTurnArrowRightIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 14V8A5 5 0 0 0 6 8v13"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m12 11 4 4 4-4"/>
    </svg>
  );
}
