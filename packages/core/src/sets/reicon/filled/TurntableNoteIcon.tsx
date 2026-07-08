import type { IconProps } from "../../../shared/types";

export function TurntableNoteIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M19.25 11.5a.75.75 0 0 1 .75.75 2.25 2.25 0 0 0 2.25 2.25.75.75 0 0 1 0 1.5 3.73 3.73 0 0 1-2.25-.75v5a2.75 2.75 0 1 1-1.5-2.45v-5.55a.75.75 0 0 1 .75-.75Zm-.75 8.75a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0Z" clipRule="evenodd"/><path fill="currentColor" d="M12 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"/><path fill="currentColor" fillRule="evenodd" d="M2 12c0-4.714 0-7.071 1.172-8.536S6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.464C22 4.93 22 7.286 22 12v.957a.75.75 0 0 1-.5-.707 2.25 2.25 0 0 0-4.5 0v3.757A4.25 4.25 0 0 0 13.376 22H10c-3.771 0-5.657 0-6.828-1.465C2 19.072 2 16.714 2 12Zm10-3.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z" clipRule="evenodd"/>
    </svg>
  );
}
