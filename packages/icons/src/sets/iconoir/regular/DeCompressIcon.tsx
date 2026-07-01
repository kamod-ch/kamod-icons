import type { IconProps } from "../../../shared/types";

export function DeCompressIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 12H6m6 4v6m0 0 3-3m-3 3-3-3m3-11V2m0 0 3 3m-3-3L9 5"/>
    </svg>
  );
}
