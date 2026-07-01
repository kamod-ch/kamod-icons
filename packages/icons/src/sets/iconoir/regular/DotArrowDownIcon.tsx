import type { IconProps } from "../../../shared/types";

export function DotArrowDownIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 3v13m0 0 3-3m-3 3-3-3"/>
    </svg>
  );
}
