import type { IconProps } from "../../../shared/types";

export function ProjectCurve3dIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.97 0-9-1.79-9-4s4.03-4 9-4 9 1.79 9 4-4.03 4-9 4m0-19a3 3 0 0 1 3 3v1H9V5a3 3 0 0 1 3-3M3.5 15.5l4-7m13 7-4-7"/>
    </svg>
  );
}
