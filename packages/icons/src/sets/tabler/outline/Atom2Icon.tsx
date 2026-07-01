import type { IconProps } from "../../../shared/types";

export function Atom2Icon({
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
      <path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0m3 9v.01M3 9v.01M21 9v.01M8 20.1A9 9 0 0 1 3 13m13 7.1a9 9 0 0 0 5-7.1M6.2 5a9 9 0 0 1 11.4 0"/>
    </svg>
  );
}
