import type { IconProps } from "../../../shared/types";

export function FoldIcon({
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
      <path d="M12 3v6l3-3M9 6l3 3m0 12v-6l3 3m-6 0 3-3m-8-3h1m4 0h1m4 0h1m4 0h1"/>
    </svg>
  );
}
