import type { IconProps } from "../../../shared/types";

export function KeyframeAlignHorizontalIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" d="M10.963 6.073a1.35 1.35 0 0 1 2.074 0l4.22 5.062a1.35 1.35 0 0 1 0 1.729l-4.22 5.063a1.35 1.35 0 0 1-2.074 0l-4.22-5.063a1.35 1.35 0 0 1 .001-1.729z"/><path fill="currentColor" fillRule="evenodd" d="M1.25 12a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m18 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75" clipRule="evenodd"/>
    </svg>
  );
}
