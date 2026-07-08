import type { IconProps } from "../../../shared/types";

export function CircleArrowRightUpIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM9.75 9a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-2.69l-4.72 4.72a.75.75 0 0 1-1.06-1.06l4.72-4.72H10.5A.75.75 0 0 1 9.75 9Z" clipRule="evenodd"/>
    </svg>
  );
}
