import type { IconProps } from "../../../shared/types";

export function CardNoAccessIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M22 9V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8M22 9H6m16 0v4m-1 3.05a3.5 3.5 0 1 0-5 4.9m5-4.9a3.5 3.5 0 0 1-5 4.9m5-4.9-5 4.9"/>
    </svg>
  );
}
