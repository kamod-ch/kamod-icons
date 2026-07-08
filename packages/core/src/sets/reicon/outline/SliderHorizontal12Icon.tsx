import type { IconProps } from "../../../shared/types";

export function SliderHorizontal12Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 16.5v-9c0-.62.02-1.17.09-1.66C5.38 3.21 6.62 2.5 10 2.5h4c3.38 0 4.62.71 4.91 3.34.07.49.09 1.04.09 1.66v9c0 .62-.02 1.17-.09 1.66-.29 2.63-1.53 3.34-4.91 3.34h-4c-3.38 0-4.62-.71-4.91-3.34-.07-.49-.09-1.04-.09-1.66m-3 3v-15M22 19V4"/>
    </svg>
  );
}
