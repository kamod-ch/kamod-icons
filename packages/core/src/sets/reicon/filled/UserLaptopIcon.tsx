import type { IconProps } from "../../../shared/types";

export function UserLaptopIcon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="M10.667 11.333a4.668 4.668 0 0 0 0-9.333 4.668 4.668 0 0 0 0 9.333Z"/><path fillRule="evenodd" d="M14.767 14c-.647 0-1.27.39-1.529 1.006L11.017 20h-3.35a1 1 0 0 0 0 2H19.9c.672 0 1.261-.406 1.523-.995l2.074-4.655c.487-1.093-.306-2.35-1.522-2.35z" clipRule="evenodd"/><path d="M5.151 19.365H2.806a1 1 0 0 1-.834-1.552c2.09-2.896 5.296-4.483 8.708-4.48q.606 0 1.21.059a3.6 3.6 0 0 0-.486.817L9.718 18H7.667c-1.054 0-1.98.543-2.516 1.365Z"/></g>
    </svg>
  );
}
