import type { IconProps } from "../../../shared/types";

export function ExtrudeIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 12.353v4.294a.6.6 0 0 1-.309.525l-8.4 4.666a.6.6 0 0 1-.582 0l-8.4-4.666A.6.6 0 0 1 3 16.647v-4.294a.6.6 0 0 1 .309-.524l8.4-4.667a.6.6 0 0 1 .582 0l8.4 4.667a.6.6 0 0 1 .309.524"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m3.528 12.294 8.18 4.544a.6.6 0 0 0 .583 0l8.209-4.56M12 21.5V17m0-5V2m0 0 2.5 2.5M12 2 9.5 4.5"/>
    </svg>
  );
}
