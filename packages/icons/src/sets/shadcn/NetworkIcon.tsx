import type { IconProps } from "../../shared/types";

export function NetworkIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 2H9v6h6zm7 14h-6v6h6zM8 16H2v6h6zm-3 0v-4h14v4m-7-4V8"/>
    </svg>
  );
}
