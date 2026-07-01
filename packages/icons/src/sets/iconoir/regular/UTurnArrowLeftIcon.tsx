import type { IconProps } from "../../../shared/types";

export function UTurnArrowLeftIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 14V8a5 5 0 0 1 10 0v13"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m12 11-4 4-4-4"/>
    </svg>
  );
}
