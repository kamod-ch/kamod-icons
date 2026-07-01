import type { IconProps } from "../../../shared/types";

export function ShuffleIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M22 7c-3 0-8.5 0-10.5 5.5S5 18 2 18"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m20 5 2 2-2 2m2 9c-3 0-8.5 0-10.5-5.5S5 7 2 7"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m20 20 2-2-2-2"/>
    </svg>
  );
}
