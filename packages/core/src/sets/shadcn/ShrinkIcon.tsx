import type { IconProps } from "../../shared/types";

export function ShrinkIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 15 6 6m-1.2-6H15v4.8M4.2 15H9v4.8M9 15l-6 6M19.8 9H15V4.2M15 9l6-6M4.2 9H9V4.2M9 9 3 3"/>
    </svg>
  );
}
