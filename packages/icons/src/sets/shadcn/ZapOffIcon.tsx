import type { IconProps } from "../../shared/types";

export function ZapOffIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.41 6.75 13 2l-2.43 2.92m8 7.99L21 10h-5.34M8 8l-5 6h9l-1 8 5-6M2 2l20 20"/>
    </svg>
  );
}
