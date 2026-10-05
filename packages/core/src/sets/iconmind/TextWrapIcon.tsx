import type { IconProps } from "../../shared/types";

export function TextWrapIcon({
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
      <path d="M3 6h18M3 12h14m0 0v3h-7"/><path d="M12.5 12.5 10 15l2.5 2.5"/>
    </svg>
  );
}
