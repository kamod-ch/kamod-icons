import type { IconProps } from "../../shared/types";

export function IceCream2Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 21h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0m.15 6c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.14 11a3.5 3.5 0 1 1 6.71 0"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.5 6.5a3.5 3.5 0 1 0-7 0"/>
    </svg>
  );
}
