import type { IconProps } from "../../../shared/types";

export function SliderVertical12Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.5 5h9c.62 0 1.17.02 1.66.09 2.63.29 3.34 1.53 3.34 4.91v4c0 3.38-.71 4.62-3.34 4.91-.49.07-1.04.09-1.66.09h-9c-.62 0-1.17-.02-1.66-.09C3.21 18.62 2.5 17.38 2.5 14v-4c0-3.38.71-4.62 3.34-4.91C6.33 5.02 6.88 5 7.5 5m-3-3h15M5 22h15"/>
    </svg>
  );
}
