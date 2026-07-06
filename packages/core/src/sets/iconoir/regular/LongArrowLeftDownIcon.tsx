import type { IconProps } from "../../../shared/types";

export function LongArrowLeftDownIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4.5 13.5 8 17l3.5-3.5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 17v-6a4 4 0 0 1 4-4h7"/>
    </svg>
  );
}
