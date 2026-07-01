import type { IconProps } from "../../../shared/types";

export function FoldDownIcon({
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
      <path d="M12 11v8l3-3m-6 0 3 3M9 7h1m4 0h1m4 0h1M4 7h1"/>
    </svg>
  );
}
