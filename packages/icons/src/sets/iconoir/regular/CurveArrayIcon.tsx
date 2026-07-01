import type { IconProps } from "../../../shared/types";

export function CurveArrayIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5.164 17a17.5 17.5 0 0 1 1.132-3M11.5 7.794A17 17 0 0 1 14 6.296M4.5 22a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.5 12a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m10-5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5"/>
    </svg>
  );
}
