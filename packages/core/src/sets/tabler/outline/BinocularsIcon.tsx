import type { IconProps } from "../../../shared/types";

export function BinocularsIcon({
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
      <path d="M4 16a3 3 0 1 0 6 0 3 3 0 1 0-6 0m10 0a3 3 0 1 0 6 0 3 3 0 1 0-6 0m2.346-6.83-.729-1.261c-.16-.248-1.056-.203-1.117.091l-.177 1.38"/><path d="m19.761 14.813-2.84-5.133C16.732 9.37 16.329 9 15.5 9c-.828 0-1.5.448-1.5 1v6M7.654 9.17l.729-1.261C8.543 7.66 9.439 7.706 9.5 8l.177 1.38"/><path d="m4.239 14.813 2.84-5.133C7.268 9.37 7.671 9 8.5 9c.828 0 1.5.448 1.5 1v6m0-4h4v2h-4z"/>
    </svg>
  );
}
