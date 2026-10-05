import type { IconProps } from "../../shared/types";

export function ScrollAgentIcon({
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
      <path d="M9.69 8.37a4 4 0 1 1-3.38 0M17 5v14M14.5 7.5 17 5l2.5 2.5m-5 9L17 19l2.5-2.5"/>
    </svg>
  );
}
