import type { IconProps } from "../../../shared/types";

export function TrainIcon({
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
      <path d="M11 5c6.634 0 10.853 3.11 10.996 7.754L22 13a3 3 0 0 1-3 3H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM7 7H4v3h3zm4 0H9v3h3V7.026A19 19 0 0 0 11 7m3.001.257L14 10h5.04c-.979-1.337-2.689-2.306-5.039-2.743M21 18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z"/>
    </svg>
  );
}
