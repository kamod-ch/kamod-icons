import type { IconProps } from "../../../shared/types";

export function AdobeLightroomIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M21.75 17A4.75 4.75 0 0 1 17 21.75H7A4.75 4.75 0 0 1 2.25 17V7A4.75 4.75 0 0 1 7 2.25h10A4.75 4.75 0 0 1 21.75 7zM7 16.75a.75.75 0 0 1-.75-.75V8a.75.75 0 0 1 1.5 0v7.25H11a.75.75 0 0 1 0 1.5zm6.25-.75a.75.75 0 0 0 1.5 0v-2.998l.003-.045a2 2 0 0 1 .265-.82c.235-.392.736-.887 1.982-.887a.75.75 0 0 0 0-1.5c-.973 0-1.713.232-2.268.586a.75.75 0 0 0-1.482.164z" clipRule="evenodd"/>
    </svg>
  );
}
