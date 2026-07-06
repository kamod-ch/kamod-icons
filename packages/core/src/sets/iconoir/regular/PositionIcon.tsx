import type { IconProps } from "../../../shared/types";

export function PositionIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14m0 0v2m-7-9H3m9-7V3m7 9h2"/>
    </svg>
  );
}
