import type { IconProps } from "../../../shared/types";

export function HandBrakeIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 16v-4m0-3V8"/><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3.953 4.5A10.96 10.96 0 0 0 1 12c0 2.899 1.121 5.535 2.953 7.5m16.094-15A10.96 10.96 0 0 1 23 12c0 2.899-1.121 5.535-2.953 7.5"/>
    </svg>
  );
}
