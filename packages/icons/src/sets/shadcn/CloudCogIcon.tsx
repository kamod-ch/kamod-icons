import type { IconProps } from "../../shared/types";

export function CloudCogIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 16.2A4.5 4.5 0 0 0 17.5 8h-1.8A7 7 0 1 0 4 14.9"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0-7v1m0 6v1m4-4h-1m-6 0H8m7-3-.88.88m-4.24 4.24L9 20m6 0-.88-.88m-4.24-4.24L9 14"/>
    </svg>
  );
}
