import type { IconProps } from "../../../shared/types";

export function BinocularIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21.5 14 20 9s-.5-2-2.5-2c0 0 0-2-2-2s-2 2-2 2h-3s0-2-2-2-2 2-2 2C4.5 7 4 9 4 9l-1.5 5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8m12 0a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
    </svg>
  );
}
