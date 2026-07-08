import type { IconProps } from "../../../shared/types";

export function TuningSquare2Icon({
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
      <path fill="currentColor" d="M10 17.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM15.25 8a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"/><path fill="currentColor" fillRule="evenodd" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Zm8 6.75a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5ZM16.75 8a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0Zm-3.5 8a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75ZM10 7.25a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1 0-1.5zM4.25 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75ZM19 7.25a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1 0-1.5z" clipRule="evenodd"/>
    </svg>
  );
}
