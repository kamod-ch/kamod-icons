import type { IconProps } from "../../../shared/types";

export function RestartIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6.677 20.567C2.531 18.021.758 12.758 2.717 8.144 4.875 3.06 10.745.688 15.829 2.846s7.456 8.029 5.298 13.113a9.95 9.95 0 0 1-3.962 4.608"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17 16v4.4a.6.6 0 0 0 .6.6H22m-10 1.01.01-.011"/>
    </svg>
  );
}
