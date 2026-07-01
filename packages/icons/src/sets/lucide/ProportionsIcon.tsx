import type { IconProps } from "../../shared/types";

export function ProportionsIcon({
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
      <rect x="2" y="4" rx="2"/><path d="M12 9v11M2 9h13a2 2 0 0 1 2 2v9"/>
    </svg>
  );
}
