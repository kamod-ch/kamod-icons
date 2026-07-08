import type { IconProps } from "../../../shared/types";

export function CircleSortVIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5ZM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12Z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M6.495 12.695a.75.75 0 0 1 1.06.05L8.75 14.06V8a.75.75 0 0 1 1.5 0v6.06l1.195-1.315a.75.75 0 0 1 1.11 1.01l-2.5 2.75a.75.75 0 0 1-1.11 0l-2.5-2.75a.75.75 0 0 1 .05-1.06Z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M11.496 11.305a.75.75 0 0 0 1.059-.05L13.75 9.94V16a.75.75 0 0 0 1.5 0V9.94l1.195 1.315a.75.75 0 0 0 1.11-1.01l-2.5-2.75a.75.75 0 0 0-1.11 0l-2.5 2.75a.75.75 0 0 0 .05 1.06Z" clipRule="evenodd"/>
    </svg>
  );
}
