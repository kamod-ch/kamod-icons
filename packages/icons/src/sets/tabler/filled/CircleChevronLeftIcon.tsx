import type { IconProps } from "../../../shared/types";

export function CircleChevronLeftIcon({
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
      <path d="M17 3.34A10 10 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12a10 10 0 0 1 15-8.66m-3.293 4.953a1 1 0 0 0-1.414 0l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414 0l.083-.094a1 1 0 0 0-.083-1.32L11.415 12l2.292-2.293a1 1 0 0 0 0-1.414"/>
    </svg>
  );
}
