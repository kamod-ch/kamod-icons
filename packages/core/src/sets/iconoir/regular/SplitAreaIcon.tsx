import type { IconProps } from "../../../shared/types";

export function SplitAreaIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20 20H4v-4h16zM2 12h20M7 4H4v3m7-3h2m4 0h3v3"/>
    </svg>
  );
}
