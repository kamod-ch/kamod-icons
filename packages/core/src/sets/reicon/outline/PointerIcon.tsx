import type { IconProps } from "../../../shared/types";

export function PointerIcon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4.632 3.712 15.23 5.565c.642.235.623 1.148-.027 1.358l-6.971 2.23-2.23 6.971c-.209.65-1.123.67-1.358.028L3.712 4.632a.717.717 0 0 1 .92-.92"/>
    </svg>
  );
}
