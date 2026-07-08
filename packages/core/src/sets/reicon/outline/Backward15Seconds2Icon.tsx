import type { IconProps } from "../../../shared/types";

export function Backward15Seconds2Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.96 10.83H12.9l-.76 2.29h2.29a1.53 1.53 0 1 1 0 3.06h-2.29m-2.6-.01v-5.34l-1.5 1.67m1.98-8.03L12 2"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.91 7.8c-1.11 1.48-1.8 3.31-1.8 5.31A8.89 8.89 0 0 0 12 22a8.89 8.89 0 0 0 8.89-8.89A8.89 8.89 0 0 0 12 4.22c-.68 0-1.34.09-1.98.24"/>
    </svg>
  );
}
