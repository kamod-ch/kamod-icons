import type { IconProps } from "../../shared/types";

export function CanvasPanIcon({
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
      <path d="M12 3v18m-9-9h18M9.5 5.5 12 3l2.5 2.5m-5 13L12 21l2.5-2.5m-9-9L3 12l2.5 2.5m13-5L21 12l-2.5 2.5"/>
    </svg>
  );
}
