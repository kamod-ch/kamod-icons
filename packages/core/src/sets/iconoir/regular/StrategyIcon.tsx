import type { IconProps } from "../../../shared/types";

export function StrategyIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 20.5C7 11 11.5 8 20 6"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m15.909 3.81 4.486 2.09-2.092 4.486M5 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m11 13.243 2.121-2.122m0 0L20.243 16m-2.122 2.121L16 16m2.121 2.121 2.122 2.122"/>
    </svg>
  );
}
