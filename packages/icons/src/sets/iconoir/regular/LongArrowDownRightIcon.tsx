import type { IconProps } from "../../../shared/types";

export function LongArrowDownRightIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m13.25 19.25 3.5-3.5-3.5-3.5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16.75 15.75h-6a4 4 0 0 1-4-4v-7"/>
    </svg>
  );
}
