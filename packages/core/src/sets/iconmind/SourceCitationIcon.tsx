import type { IconProps } from "../../shared/types";

export function SourceCitationIcon({
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
      <path d="M13 3H6v18h12V8M8 9h8m-8 4h6"/><path d="M14 17a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-6 0h4"/>
    </svg>
  );
}
