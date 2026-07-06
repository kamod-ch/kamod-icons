import type { IconProps } from "../../../shared/types";

export function PaypalIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 17.5 6 3h7c6 0 6 9 0 9H8.7l-1.2 5.5z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m6.8 21 3-14.5h7c6 0 6 9 0 9h-4.3L11.3 21z"/>
    </svg>
  );
}
