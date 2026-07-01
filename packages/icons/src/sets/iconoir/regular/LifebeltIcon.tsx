import type { IconProps } from "../../../shared/types";

export function LifebeltIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0m1.235 2.89L5 19m9.765-4.11L19 19m-4.235-9.89L19 5M9.235 9.11 5 5"/>
    </svg>
  );
}
