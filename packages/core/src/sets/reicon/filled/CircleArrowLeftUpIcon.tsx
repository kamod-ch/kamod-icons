import type { IconProps } from "../../../shared/types";

export function CircleArrowLeftUpIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm2.25-13a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 1.5 0v-2.69l4.72 4.72a.75.75 0 1 0 1.06-1.06l-4.72-4.72h2.69a.75.75 0 0 0 .75-.75Z" clipRule="evenodd"/>
    </svg>
  );
}
