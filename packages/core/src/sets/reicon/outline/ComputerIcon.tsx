import type { IconProps } from "../../../shared/types";

export function ComputerIcon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.333 14.333H3.667A1.334 1.334 0 0 1 2.333 13V7c0-.736.598-1.333 1.334-1.333h2.666m13.334-2h-7.334a2 2 0 0 0-2 2v12.666a2 2 0 0 0 2 2h7.334a2 2 0 0 0 2-2V5.667a2 2 0 0 0-2-2M7 17.667c-2.056 0-3.333 1-3.333 1"/><path fill="currentColor" strokeWidth="1.333" d="M16 17.333a1.334 1.334 0 1 0 0-2.667 1.334 1.334 0 0 0 0 2.667Z"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.333 7.667h3.334M14.333 11h3.334"/>
    </svg>
  );
}
