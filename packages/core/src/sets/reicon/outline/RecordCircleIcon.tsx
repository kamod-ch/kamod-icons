import type { IconProps } from "../../../shared/types";

export function RecordCircleIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M13.26 13.75a3.25 3.25 0 1 1 2.74 1.5H8a3.25 3.25 0 1 1 2.74-1.5zm.99-1.75a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0ZM8 13.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25ZM2.75 12a9.25 9.25 0 1 1 18.5 0 9.25 9.25 0 0 1-18.5 0Z" clipRule="evenodd"/>
    </svg>
  );
}
