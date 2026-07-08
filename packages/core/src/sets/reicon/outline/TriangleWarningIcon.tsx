import type { IconProps } from "../../../shared/types";

export function TriangleWarningIcon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.184 4.653 2.95 17.187c-.807 1.4.2 3.146 1.816 3.146h14.466c1.615 0 2.623-1.747 1.816-3.146L13.816 4.653c-.807-1.386-2.825-1.386-3.632 0M12 9v4"/><path fill="currentColor" strokeWidth="1.333" d="M12 18c-.736 0-1.333-.6-1.333-1.333 0-.734.597-1.334 1.333-1.334s1.333.6 1.333 1.334C13.333 17.4 12.736 18 12 18Z"/>
    </svg>
  );
}
