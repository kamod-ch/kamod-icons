import type { IconProps } from "../../../shared/types";

export function RegexOffIcon({
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
      <path d="M6.5 15a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M17 7.875l3-1.687m-3 1.687v3.375m0-3.375-3-1.687m3 1.687 3 1.688M17 4.5v3.375m0 0-3 1.688M3 3l18 18"/>
    </svg>
  );
}
