import type { IconProps } from "../../../shared/types";

export function Ticket4Icon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" strokeWidth="1.333" d="M19 4h-7.667a1 1 0 0 0-1 1c0 .735-.598 1.333-1.333 1.333S7.667 5.735 7.667 5a1 1 0 0 0-1-1H5a3.67 3.67 0 0 0-3.667 3.667v8.666A3.67 3.67 0 0 0 5 20h1.667a1 1 0 0 0 1-1c0-.735.598-1.333 1.333-1.333s1.333.598 1.333 1.333a1 1 0 0 0 1 1H19a3.67 3.67 0 0 0 3.667-3.667V7.667A3.67 3.67 0 0 0 19 4ZM9 14.917a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-3.833a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
    </svg>
  );
}
