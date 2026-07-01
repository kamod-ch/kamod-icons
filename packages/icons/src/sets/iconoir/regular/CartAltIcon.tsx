import type { IconProps } from "../../../shared/types";

export function CartAltIcon({
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
      <path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-10 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16.5 4H22l-2 11h-4.5m1-11-1 11m1-11h-5.75m4.75 11h-4m-.75-11H5l2 11h4.5m-.75-11 .75 11M5 4c-.167-.667-1-2-3-2m18 13H5.23c-1.784 0-2.73.781-2.73 2s.946 2 2.73 2H19.5"/>
    </svg>
  );
}
