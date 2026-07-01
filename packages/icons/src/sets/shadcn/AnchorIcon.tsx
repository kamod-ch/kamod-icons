import type { IconProps } from "../../shared/types";

export function AnchorIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 14V8m-7 4H2a10 10 0 0 0 20 0h-3"/>
    </svg>
  );
}
