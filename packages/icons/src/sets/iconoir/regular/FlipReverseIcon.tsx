import type { IconProps } from "../../../shared/types";

export function FlipReverseIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.5 12v2m-3.75-2-.937 2m2.812 6H9.5v-2m-5.625 2H2l.938-2M7.625 8 9.5 4v4m5 12H22L14.5 4z"/>
    </svg>
  );
}
