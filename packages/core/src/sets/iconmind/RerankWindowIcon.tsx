import type { IconProps } from "../../shared/types";

export function RerankWindowIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M9 2.5H3l7 7V12h4V9.5l7-7h-6m-4.5 13H8V21h2.5m3-5.5H16V21h-2.5"/>
    </svg>
  );
}
