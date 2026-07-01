import type { IconProps } from "../../../shared/types";

export function TransitionDownIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M2.25 5A3.75 3.75 0 0 1 6 1.25h12A3.75 3.75 0 0 1 21.75 5v2A3.75 3.75 0 0 1 18 10.75H6A3.75 3.75 0 0 1 2.25 7zM3 15.25a.75.75 0 0 1 .75.75v2A3.25 3.25 0 0 0 7 21.25h10A3.25 3.25 0 0 0 20.25 18v-2a.75.75 0 0 1 1.5 0v2A4.75 4.75 0 0 1 17 22.75H7A4.75 4.75 0 0 1 2.25 18v-2a.75.75 0 0 1 .75-.75" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M12 9.25a.75.75 0 0 1 .75.75v6.19l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72V10a.75.75 0 0 1 .75-.75" clipRule="evenodd"/>
    </svg>
  );
}
