import type { IconProps } from "../../shared/types";

export function ExpandIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21-6-6m1.2 6H21v-4.8M7.8 21H3v-4.8M3 21l6-6m7.2-12H21v4.8M21 3l-6 6M7.8 3H3v4.8M3 3l6 6"/>
    </svg>
  );
}
