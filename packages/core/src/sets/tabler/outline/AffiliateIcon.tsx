import type { IconProps } from "../../../shared/types";

export function AffiliateIcon({
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
      <path d="m5.931 6.936 1.275 4.249m5.607 5.609 4.251 1.275m-5.381-5.752 5.759-5.759M4 5.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0m13 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0m0 13a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0m-13-3a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0-9 0"/>
    </svg>
  );
}
