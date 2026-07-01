import type { IconProps } from "../../../shared/types";

export function TramIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m15 16.01.01-.011M9 16.01l.01-.011M13 6h2a5 5 0 0 1 5 5v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7a5 5 0 0 1 5-5zm0 0 1-4m0 0h3m-3 0H7"/><path stroke="currentColor" strokeLinecap="round" d="m10.5 20-2 2.5m5-2.5 2 2.5m1-2.5 2 2.5M7.5 20l-2 2.5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.609 9h4.782A2.61 2.61 0 0 1 17 11.609a.39.39 0 0 1-.391.391H7.39a.39.39 0 0 1-.39-.391A2.61 2.61 0 0 1 9.609 9"/>
    </svg>
  );
}
