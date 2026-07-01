import type { IconProps } from "../../../shared/types";

export function ArrowsJoin2Icon({
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
      <path d="M3 7h1.948c1.913 0 3.705.933 4.802 2.5a5.86 5.86 0 0 0 4.802 2.5H21"/><path d="M3 17h1.95a5.85 5.85 0 0 0 4.798-2.5 5.85 5.85 0 0 1 4.798-2.5H20"/><path d="m18 15 3-3-3-3"/>
    </svg>
  );
}
