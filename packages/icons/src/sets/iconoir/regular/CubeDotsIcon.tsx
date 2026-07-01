import type { IconProps } from "../../../shared/types";

export function CubeDotsIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m12.496 19.717 6-3.43A1 1 0 0 0 19 15.42V9.58a1 1 0 0 0-.504-.868l-6-3.428a1 1 0 0 0-.992 0l-6 3.428A1 1 0 0 0 5 9.58v5.84a1 1 0 0 0 .504.868l6 3.428a1 1 0 0 0 .992 0M5.5 9.5 12 13m0 0 6.5-3.5M12 13v6.5M3 3.01 3.01 3M3 21.01l.01-.01M21 3.01l.01-.01M21 21.01l.01-.011"/>
    </svg>
  );
}
