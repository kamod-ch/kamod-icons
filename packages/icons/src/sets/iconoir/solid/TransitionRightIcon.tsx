import type { IconProps } from "../../../shared/types";

export function TransitionRightIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M1.25 6A3.75 3.75 0 0 1 5 2.25h2A3.75 3.75 0 0 1 10.75 6v12A3.75 3.75 0 0 1 7 21.75H5A3.75 3.75 0 0 1 1.25 18zm14-3a.75.75 0 0 1 .75-.75h2A4.75 4.75 0 0 1 22.75 7v10A4.75 4.75 0 0 1 18 21.75h-2a.75.75 0 0 1 0-1.5h2A3.25 3.25 0 0 0 21.25 17V7A3.25 3.25 0 0 0 18 3.75h-2a.75.75 0 0 1-.75-.75" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M14.47 8.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H10a.75.75 0 0 1 0-1.5h6.19l-1.72-1.72a.75.75 0 0 1 0-1.06" clipRule="evenodd"/>
    </svg>
  );
}
