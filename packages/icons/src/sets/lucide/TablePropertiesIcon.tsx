import type { IconProps } from "../../shared/types";

export function TablePropertiesIcon({
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
      <path d="M15 3v18"/><rect x="3" y="3" rx="2"/><path d="M21 9H3m18 6H3"/>
    </svg>
  );
}
