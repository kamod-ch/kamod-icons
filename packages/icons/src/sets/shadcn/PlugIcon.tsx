import type { IconProps } from "../../shared/types";

export function PlugIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22v-5M9 7V2m6 5V2M6 13V8h12v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4"/>
    </svg>
  );
}
