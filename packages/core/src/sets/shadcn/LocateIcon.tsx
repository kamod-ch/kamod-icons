import type { IconProps } from "../../shared/types";

export function LocateIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 12h3m14 0h3M12 2v3m0 14v3m0-3a7 7 0 1 0 0-14 7 7 0 0 0 0 14"/>
    </svg>
  );
}
