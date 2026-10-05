import type { IconProps } from "../../shared/types";

export function HillIcon({
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
      <path d="M2 14a7 7 0 0 1 14 0"/><path d="M12 14a5 5 0 0 1 10 0M2 14h20M6 19h12"/>
    </svg>
  );
}
