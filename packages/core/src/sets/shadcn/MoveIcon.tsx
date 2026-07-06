import type { IconProps } from "../../shared/types";

export function MoveIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 9-3 3 3 3M9 5l3-3 3 3m0 14-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20"/>
    </svg>
  );
}
