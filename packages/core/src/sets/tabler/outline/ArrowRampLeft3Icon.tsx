import type { IconProps } from "../../../shared/types";

export function ArrowRampLeft3Icon({
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
      <path d="M18 3v6M8 16l-4-4 4-4"/><path d="M18 21v-6a3 3 0 0 0-3-3H4"/>
    </svg>
  );
}
