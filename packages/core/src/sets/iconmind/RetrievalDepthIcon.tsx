import type { IconProps } from "../../shared/types";

export function RetrievalDepthIcon({
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
      <path d="m15 7 5 5-8 8-8-8 5-5m3 2v8"/><path d="M9.5 14.5 12 17l2.5-2.5"/>
    </svg>
  );
}
