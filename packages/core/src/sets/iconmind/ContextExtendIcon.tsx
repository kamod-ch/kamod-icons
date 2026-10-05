import type { IconProps } from "../../shared/types";

export function ContextExtendIcon({
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
      <path d="M5.5 4H3v16h2.5M7 12h7m-.5-2.5L16 12l-2.5 2.5m5-10.5H21v16h-2.5"/>
    </svg>
  );
}
