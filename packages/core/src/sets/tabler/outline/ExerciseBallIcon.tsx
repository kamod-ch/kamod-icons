import type { IconProps } from "../../../shared/types";

export function ExerciseBallIcon({
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
      <path d="M5.59 18.31A15.57 15.57 0 0 1 10.1 9.1a15.9 15.9 0 0 1 7.43-4.19M11.55 21a9.34 9.34 0 0 1 2.79-7.65 9.5 9.5 0 0 1 6.54-2.85"/><path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0"/>
    </svg>
  );
}
