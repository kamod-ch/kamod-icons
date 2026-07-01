import type { IconProps } from "../../shared/types";

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
      <path d="M12 7.5a4.5 4.5 0 1 1 5 4.5M7 12a4.5 4.5 0 1 1 5-4.5V21"/>
    </svg>
  );
}
