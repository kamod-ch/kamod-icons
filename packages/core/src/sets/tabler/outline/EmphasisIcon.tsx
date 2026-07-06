import type { IconProps } from "../../../shared/types";

export function EmphasisIcon({
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
      <path d="M16 5H8v10h8m-1-5H8M6 20v.01m4-.01v.01m4-.01v.01m4-.01v.01"/>
    </svg>
  );
}
