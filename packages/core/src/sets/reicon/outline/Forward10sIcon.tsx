import type { IconProps } from "../../../shared/types";

export function Forward10sIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25a.75.75 0 0 1 .586 1.219l-2 2.5a.75.75 0 0 1-1.172-.938l.903-1.128A9.25 9.25 0 0 0 2.75 12 9.25 9.25 0 1 0 15.7 3.52a.75.75 0 0 1 .6-1.375A10.75 10.75 0 0 1 22.75 12c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12Zm9.075-4.176a.75.75 0 0 1 .425.676v7a.75.75 0 0 1-1.5 0v-5.44l-1.281 1.026a.75.75 0 0 1-.938-1.172l2.5-2a.75.75 0 0 1 .794-.09ZM14.25 9.25a1 1 0 0 0-1 1v3.5a1 1 0 1 0 2 0v-3.5a1 1 0 0 0-1-1Zm-2.5 1a2.5 2.5 0 0 1 5 0v3.5a2.5 2.5 0 0 1-5 0z" clipRule="evenodd"/>
    </svg>
  );
}
