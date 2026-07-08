import type { IconProps } from "../../../shared/types";

export function Setting52Icon({
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
      <path fill="currentColor" d="M18.51 8.25c.5 0 .9-.4.9-.9V2.7c0-.5-.4-.9-.9-.9s-.9.4-.9.9v4.65c0 .49.41.9.9.9ZM12 15.75c-.5 0-.9.4-.9.9v4.65c0 .5.4.9.9.9s.9-.4.9-.9v-4.65c0-.49-.4-.9-.9-.9Zm-6.51-7.5c.5 0 .9-.4.9-.9V2.7c0-.5-.4-.9-.9-.9s-.9.4-.9.9v4.65c0 .49.4.9.9.9Zm1.86 1.922H3.63c-.5 0-.9.4-.9.9s.4.9.9.9h.96v9.33c0 .5.4.9.9.9s.9-.4.9-.9v-9.33h.96c.5 0 .9-.4.9-.9s-.41-.9-.9-.9Zm13.02 0h-3.72c-.5 0-.9.4-.9.9s.4.9.9.9h.96v9.33c0 .5.4.9.9.9s.9-.4.9-.9v-9.33h.96c.5 0 .9-.4.9-.9s-.4-.9-.9-.9Zm-6.51 1.858h-.96V2.7c0-.5-.4-.9-.9-.9s-.9.4-.9.9v9.33h-.96c-.5 0-.9.4-.9.9s.4.9.9.9h3.72c.5 0 .9-.4.9-.9s-.4-.9-.9-.9Z"/>
    </svg>
  );
}
