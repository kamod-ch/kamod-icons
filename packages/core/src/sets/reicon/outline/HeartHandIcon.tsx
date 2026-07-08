import type { IconProps } from "../../../shared/types";

export function HeartHandIcon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M14.81 6.815c.11-.471.19-.956.19-1.474a3.663 3.663 0 0 0-3.644-3.674 3.7 3.7 0 0 0-3.023 1.638 3.7 3.7 0 0 0-3.022-1.638A3.663 3.663 0 0 0 1.667 5.34c0 2.79 1.737 4.915 3.438 6.337"/><path d="M22.333 19.633c0-2.745-.314-4.852-1.333-5.63-1.167-.892-4.203-1.118-7.06-.31l-1.773-3.769a1.667 1.667 0 0 0-2.218-.804h0a1.667 1.667 0 0 0-.805 2.215l3.415 7.274-3.632-.668a1.63 1.63 0 0 0-1.828 1.047h0c-.31.85.13 1.787.981 2.092l3.488 1.255"/></g>
    </svg>
  );
}
