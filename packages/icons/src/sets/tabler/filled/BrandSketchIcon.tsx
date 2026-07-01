import type { IconProps } from "../../../shared/types";

export function BrandSketchIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M7.554 3.004h8.929a2 2 0 0 1 1.647.873l3.536 5.193a2.006 2.006 0 0 1-.173 2.48l-8 8.79a2.007 2.007 0 0 1-2.97 0l-8-8.789a1 1 0 0 1-.13-.175l-.012-.026-.051-.072a2.01 2.01 0 0 1-.056-2.063l.09-.146 3.541-5.193c.372-.544.987-.87 1.649-.872"/>
    </svg>
  );
}
