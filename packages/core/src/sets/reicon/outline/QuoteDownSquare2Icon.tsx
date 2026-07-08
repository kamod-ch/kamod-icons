import type { IconProps } from "../../../shared/types";

export function QuoteDownSquare2Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 12.16h2.68c.71 0 1.19.54 1.19 1.19v1.49c0 .65-.48 1.19-1.19 1.19H8.19A1.2 1.2 0 0 1 7 14.84zm0 0c0-2.79.52-3.26 2.09-4.19m4.05 4.19h2.68c.71 0 1.19.54 1.19 1.19v1.49c0 .65-.48 1.19-1.19 1.19h-1.49a1.2 1.2 0 0 1-1.19-1.19zm0 0c0-2.79.52-3.26 2.09-4.19"/>
    </svg>
  );
}
