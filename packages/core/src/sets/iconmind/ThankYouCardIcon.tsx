import type { IconProps } from "../../shared/types";

export function ThankYouCardIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M3 5v14h18V5Z"/><path d="M12 16c-3-2-6-4.5-4.5-7C9 7.5 11 8.5 12 10c1-1.5 3-2.5 4.5-1 1.5 2.5-1.5 5-4.5 7"/>
    </svg>
  );
}
