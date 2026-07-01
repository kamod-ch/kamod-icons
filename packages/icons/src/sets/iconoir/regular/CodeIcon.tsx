import type { IconProps } from "../../../shared/types";

export function CodeIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13.5 6 10 18.5m-3.5-10L3 12l3.5 3.5m11-7L21 12l-3.5 3.5"/>
    </svg>
  );
}
