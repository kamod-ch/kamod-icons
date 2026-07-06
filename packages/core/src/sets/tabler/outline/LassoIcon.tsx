import type { IconProps } from "../../../shared/types";

export function LassoIcon({
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
      <path d="M4.028 13.252C3.371 12.28 3 11.174 3 10c0-3.866 4.03-7 9-7s9 3.134 9 7-4.03 7-9 7c-1.913 0-3.686-.464-5.144-1.255"/><path d="M3 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M5 17c0 1.42.316 2.805 1 4"/>
    </svg>
  );
}
