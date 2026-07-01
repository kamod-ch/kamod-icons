import type { IconProps } from "../../../shared/types";

export function ClockRotateRightIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h6"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21.888 10.5C21.164 5.689 17.013 2 12 2 6.477 2 2 6.477 2 12s4.477 10 10 10c4.1 0 7.625-2.468 9.168-6"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17 16h4.4a.6.6 0 0 1 .6.6V21"/>
    </svg>
  );
}
