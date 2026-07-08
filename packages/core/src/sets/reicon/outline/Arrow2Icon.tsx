import type { IconProps } from "../../../shared/types";

export function Arrow2Icon({
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
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22v-2m0-2v-2m0-2v-3c0-3.87 3.13-7 7-7h3M2 4h3c3.87 0 7 3.13 7 7v3"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 2 2 4l2 2m16-4 2 2-2 2"/>
    </svg>
  );
}
