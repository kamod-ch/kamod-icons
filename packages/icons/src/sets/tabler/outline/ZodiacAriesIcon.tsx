import type { IconProps } from "../../../shared/types";

export function ZodiacAriesIcon({
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
      <path d="M12 5a5 5 0 1 0-4 8m8 0a5 5 0 1 0-4-8m0 16V5"/>
    </svg>
  );
}
