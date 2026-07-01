import type { IconProps } from "../../../shared/types";

export function ScaleFrameEnlargeIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11 13.6V21H3.6a.6.6 0 0 1-.6-.6V13h7.4a.6.6 0 0 1 .6.6m0 7.4h3M3 13v-3m3-7H3.6a.6.6 0 0 0-.6.6V6m11-3h-4m11 7v4M18 3h2.4a.6.6 0 0 1 .6.6V6m-3 15h2.4a.6.6 0 0 0 .6-.6V18m-10-8h3v3"/>
    </svg>
  );
}
