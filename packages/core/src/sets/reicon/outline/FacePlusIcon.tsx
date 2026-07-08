import type { IconProps } from "../../../shared/types";

export function FacePlusIcon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.001 15.677a3.548 3.548 0 0 1-6 0"/><path fill="currentColor" strokeWidth="1.333" d="M8.001 13.333a1.334 1.334 0 1 0 0-2.667 1.334 1.334 0 0 0 0 2.667Zm8 0a1.334 1.334 0 1 0 0-2.667 1.334 1.334 0 0 0 0 2.667Z"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.668 1.667v6.666M23.001 5h-6.666m-3.057-2.58a9.5 9.5 0 0 0-1.277-.087c-5.338 0-9.666 4.328-9.666 9.667S6.663 21.667 12 21.667A9.667 9.667 0 0 0 21.667 12l-.002-.201"/>
    </svg>
  );
}
