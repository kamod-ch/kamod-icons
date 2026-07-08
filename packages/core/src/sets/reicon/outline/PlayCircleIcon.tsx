import type { IconProps } from "../../../shared/types";

export function PlayCircleIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M11.075 7.508c-1.329-.784-2.825.283-2.825 1.705v5.574c0 1.422 1.496 2.489 2.825 1.705l4.72-2.787c1.273-.752 1.273-2.658 0-3.41zM9.75 9.213c0-.198.096-.337.21-.408a.32.32 0 0 1 .352-.005l4.72 2.787a.47.47 0 0 1 .218.413.47.47 0 0 1-.218.413l-4.72 2.787a.32.32 0 0 1-.353-.005.47.47 0 0 1-.209-.408z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25ZM2.75 12a9.25 9.25 0 1 1 18.5 0 9.25 9.25 0 0 1-18.5 0Z" clipRule="evenodd"/>
    </svg>
  );
}
