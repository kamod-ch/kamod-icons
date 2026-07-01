import type { IconProps } from "../../../shared/types";

export function MediaImagePlusIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13 21H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6V13"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m3 16 7-3 5.5 2.5M16 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 9h3m3 0h-3m0 0v-3m0 3v3"/>
    </svg>
  );
}
