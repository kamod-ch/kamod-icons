import type { IconProps } from "../../../shared/types";

export function AlarmMinusIcon({
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
      <path fill="currentColor" d="M4.8 2.75c.316 0 .613.07.878.197a.75.75 0 0 0 .644-1.355 3.55 3.55 0 0 0-4.73 4.73.75.75 0 0 0 1.355-.644A2.05 2.05 0 0 1 4.8 2.75Zm13.522.197a2.05 2.05 0 0 1 2.731 2.731.75.75 0 0 0 1.355.644 3.55 3.55 0 0 0-4.73-4.73.75.75 0 1 0 .644 1.355ZM15 13.25a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5z"/><path fill="currentColor" fillRule="evenodd" d="M12 2.75a9.75 9.75 0 0 0-9.75 9.75c0 2.55.979 4.87 2.581 6.608L2.47 21.47a.75.75 0 1 0 1.06 1.06l2.4-2.4A9.7 9.7 0 0 0 12 22.25a9.7 9.7 0 0 0 6.07-2.12l2.4 2.4a.75.75 0 0 0 1.06-1.06l-2.361-2.362a9.72 9.72 0 0 0 2.58-6.608 9.75 9.75 0 0 0-9.75-9.75ZM3.75 12.5a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0Z" clipRule="evenodd"/>
    </svg>
  );
}
