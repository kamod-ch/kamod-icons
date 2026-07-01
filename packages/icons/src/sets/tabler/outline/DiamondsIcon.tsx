import type { IconProps } from "../../../shared/types";

export function DiamondsIcon({
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
      <path d="m10.831 20.413-5.375-6.91c-.608-.783-.608-2.223 0-3l5.375-6.911a1.457 1.457 0 0 1 2.338 0l5.375 6.91c.608.783.608 2.223 0 3l-5.375 6.911a1.457 1.457 0 0 1-2.338 0"/>
    </svg>
  );
}
