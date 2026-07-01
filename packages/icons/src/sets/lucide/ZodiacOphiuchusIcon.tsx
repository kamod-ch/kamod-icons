import type { IconProps } from "../../shared/types";

export function ZodiacOphiuchusIcon({
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
      <path d="M3 10a6.06 6.06 0 0 1 9 0 6.06 6.06 0 0 0 9 0"/><path d="M6 3v12a6 6 0 0 0 12 0V3"/>
    </svg>
  );
}
