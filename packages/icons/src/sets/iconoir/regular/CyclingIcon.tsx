import type { IconProps } from "../../../shared/types";

export function CyclingIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6m5.5-3 1.5-4-4.882-2 3-3.5 3 2.5h3.5"/>
    </svg>
  );
}
