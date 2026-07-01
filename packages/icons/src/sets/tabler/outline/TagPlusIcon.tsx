import type { IconProps } from "../../../shared/types";

export function TagPlusIcon({
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
      <path d="M6.5 7.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/><path d="M21.002 13a2.4 2.4 0 0 0-.706-1.704l-7.71-7.71A2 2 0 0 0 11.172 3H6a3 3 0 0 0-3 3v5.172a2 2 0 0 0 .586 1.414l7.71 7.71c.471.47 1.087.706 1.704.706M16 19h6m-3-3v6"/>
    </svg>
  );
}
