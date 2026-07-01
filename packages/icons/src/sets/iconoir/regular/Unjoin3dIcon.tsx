import type { IconProps } from "../../../shared/types";

export function Unjoin3dIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11.5 7 9 12h6l-2.5 5m8.339 3.84h-3.536m3.536 0v-3.536m0 3.535L17 17M2.768 2.768h3.535m-3.535 0v3.535m0-3.535 3.839 3.839"/>
    </svg>
  );
}
