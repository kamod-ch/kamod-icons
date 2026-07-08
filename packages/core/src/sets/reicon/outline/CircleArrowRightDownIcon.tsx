import type { IconProps } from "../../../shared/types";

export function CircleArrowRightDownIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5ZM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12Zm7.22-3.53a.75.75 0 0 1 1.06 0l4.72 4.72V10.5a.75.75 0 0 1 1.5 0V15a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1 0-1.5h2.69L8.47 9.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"/>
    </svg>
  );
}
