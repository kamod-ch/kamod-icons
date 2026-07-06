import type { IconProps } from "../../shared/types";

export function Settings2Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7h-9m3 10H5m12 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6M7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
    </svg>
  );
}
