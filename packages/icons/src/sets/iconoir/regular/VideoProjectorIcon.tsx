import type { IconProps } from "../../../shared/types";

export function VideoProjectorIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4 19h2m12 0h2"/><path stroke="currentColor" d="M2 16.4V7.6a.6.6 0 0 1 .6-.6h18.8a.6.6 0 0 1 .6.6v8.8a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6Z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m5 10.01.01-.011M8 10.01l.01-.011m2.99.011.01-.011M5 14.01l.01-.011M8 14.01l.01-.011m2.99.011.01-.011M17 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
    </svg>
  );
}
