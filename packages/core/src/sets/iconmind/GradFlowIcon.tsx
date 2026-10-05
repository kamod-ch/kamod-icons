import type { IconProps } from "../../shared/types";

export function GradFlowIcon({
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
      <path d="M4 5h16M10 7.5l2 2 2-2M4 12h16m-10 2.5 2 2 2-2M4 19h16"/>
    </svg>
  );
}
