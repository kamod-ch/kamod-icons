import type { IconProps } from "../../../shared/types";

export function FormatSquare2Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 6.95v10.1A2.5 2.5 0 0 0 17.05 20H6.95A2.5 2.5 0 0 0 4 17.05V6.95A2.5 2.5 0 0 0 6.95 4h10.1A2.5 2.5 0 0 0 20 6.95"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 4.5a2.5 2.5 0 0 1-5 0A2.5 2.5 0 0 1 6.95 4c.03.16.05.33.05.5m15 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-15 15a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m15 0a2.5 2.5 0 0 1-4.95.5 2.5 2.5 0 1 1 4.95-.5"/>
    </svg>
  );
}
