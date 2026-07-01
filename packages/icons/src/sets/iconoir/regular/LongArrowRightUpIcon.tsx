import type { IconProps } from "../../../shared/types";

export function LongArrowRightUpIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19 10.5 15.5 7 12 10.5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15.5 7v6a4 4 0 0 1-4 4h-7"/>
    </svg>
  );
}
