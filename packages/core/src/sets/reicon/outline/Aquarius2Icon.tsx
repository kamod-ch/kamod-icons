import type { IconProps } from "../../../shared/types";

export function Aquarius2Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 16c3.87 0 7-3.13 7-7s-3.13-7-7-7-7 3.13-7 7m7 7v6m3-3H9"/>
    </svg>
  );
}
