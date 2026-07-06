import type { IconProps } from "../../shared/types";

export function ZodiacCancerIcon({
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
      <path d="M21 14.5A9 6.5 0 0 1 5.5 19M3 9.5A9 6.5 0 0 1 18.5 5"/><circle cx="17.5" cy="14.5" r="3.5"/><circle cx="6.5" cy="9.5" r="3.5"/>
    </svg>
  );
}
