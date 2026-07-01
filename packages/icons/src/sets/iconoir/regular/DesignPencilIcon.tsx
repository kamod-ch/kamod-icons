import type { IconProps } from "../../../shared/types";

export function DesignPencilIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 21.168V14l4-7 4 7v7.168"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 14s1.127 1 2 1 2-1 2-1 1.127 1 2 1 2-1 2-1"/>
    </svg>
  );
}
