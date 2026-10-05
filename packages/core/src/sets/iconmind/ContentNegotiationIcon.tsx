import type { IconProps } from "../../shared/types";

export function ContentNegotiationIcon({
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
      <path d="M13 3H6v18h12V8M8 9h5"/><path d="M12.5 6.5 15 9l-2.5 2.5M11 15h5m-4.5-2.5L9 15l2.5 2.5"/>
    </svg>
  );
}
