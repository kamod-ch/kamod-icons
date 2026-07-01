import type { IconProps } from "../../../shared/types";

export function ColorFilterIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 14.5a6 6 0 1 0 0-12 6 6 0 0 0 0 12"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 21.5a6 6 0 1 0 0-12 6 6 0 0 0 0 12"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 21.5a6 6 0 1 0 0-12 6 6 0 0 0 0 12"/>
    </svg>
  );
}
