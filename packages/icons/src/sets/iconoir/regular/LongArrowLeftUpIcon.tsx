import type { IconProps } from "../../../shared/types";

export function LongArrowLeftUpIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 8 7l3.5 3.5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 7v6a4 4 0 0 0 4 4h7"/>
    </svg>
  );
}
