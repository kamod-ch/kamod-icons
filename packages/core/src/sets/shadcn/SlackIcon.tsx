import type { IconProps } from "../../shared/types";

export function SlackIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 3.5a1.5 1.5 0 0 0-3 0v5a1.5 1.5 0 0 0 3 0zm3 5V10h1.5A1.5 1.5 0 1 0 19 8.5m-8 7a1.5 1.5 0 0 0-3 0v5a1.5 1.5 0 0 0 3 0zm-6 0V14H3.5A1.5 1.5 0 1 0 5 15.5M20.5 13h-5a1.5 1.5 0 0 0 0 3h5a1.5 1.5 0 0 0 0-3m-5 6H14v1.5a1.5 1.5 0 1 0 1.5-1.5m-7-11h-5a1.5 1.5 0 1 0 0 3h5a1.5 1.5 0 0 0 0-3m0-3H10V3.5A1.5 1.5 0 1 0 8.5 5"/>
    </svg>
  );
}
