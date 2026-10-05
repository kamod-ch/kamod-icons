import type { IconProps } from "../../shared/types";

export function CodeAgentIcon({
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
      <path d="M13.69 2.87a4 4 0 1 1-3.38 0M9 13l-2.5 2.5L9 18m6-5 2.5 2.5L15 18"/>
    </svg>
  );
}
