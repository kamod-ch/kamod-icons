import type { IconProps } from "../../../shared/types";

export function AlarmPlusIcon({
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
      <path fill="currentColor" d="M5.678 2.947a2.05 2.05 0 0 0-2.731 2.731.75.75 0 0 1-1.355.644 3.55 3.55 0 0 1 4.73-4.73.75.75 0 0 1-.644 1.355ZM19.2 2.75c-.316 0-.613.07-.878.197a.75.75 0 0 1-.644-1.355 3.55 3.55 0 0 1 4.73 4.73.75.75 0 0 1-1.355-.644A2.05 2.05 0 0 0 19.2 2.75Zm-3.45 9.75a.75.75 0 0 1-.75.75h-2.25v2.25a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V9.5a.75.75 0 0 1 1.5 0v2.25H15a.75.75 0 0 1 .75.75Z"/><path fill="currentColor" fillRule="evenodd" d="M2.25 12.5c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75c0 2.55-.979 4.87-2.581 6.608l2.361 2.362a.75.75 0 1 1-1.06 1.06l-2.4-2.4A9.7 9.7 0 0 1 12 22.25a9.7 9.7 0 0 1-6.07-2.12l-2.4 2.4a.75.75 0 0 1-1.06-1.06l2.361-2.362A9.72 9.72 0 0 1 2.25 12.5ZM12 4.25a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5Z" clipRule="evenodd"/>
    </svg>
  );
}
