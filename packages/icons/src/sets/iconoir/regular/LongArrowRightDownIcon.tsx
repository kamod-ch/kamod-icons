import type { IconProps } from "../../../shared/types";

export function LongArrowRightDownIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19 13.5 15.5 17 12 13.5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15.5 17v-6a4 4 0 0 0-4-4h-7"/>
    </svg>
  );
}
