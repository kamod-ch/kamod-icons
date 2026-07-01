import type { IconProps } from "../../../shared/types";

export function KeyMinusIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14.992 18h6m-8.58-7.657a4 4 0 1 0 5.657-5.657 4 4 0 0 0-5.657 5.657m0 0-8.485 8.485 2.121 2.122M6.755 16l2.122 2.121"/>
    </svg>
  );
}
