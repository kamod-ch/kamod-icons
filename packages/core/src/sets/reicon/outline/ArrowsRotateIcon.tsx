import type { IconProps } from "../../../shared/types";

export function ArrowsRotateIcon({
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
      <path fill="currentColor" d="M12.001 21.25c4.474 0 8.208-3.177 9.065-7.4a.75.75 0 0 1 1.47.3c-.996 4.906-5.333 8.6-10.535 8.6a10.74 10.74 0 0 1-9.251-5.271V20a.75.75 0 0 1-1.5 0v-4.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5H3.783a9.25 9.25 0 0 0 8.218 5Zm-9.066-11.1A9.25 9.25 0 0 1 12 2.75a9.25 9.25 0 0 1 8.218 5H17.5a.75.75 0 0 0 0 1.5h4.501a.75.75 0 0 0 .75-.75V4a.75.75 0 0 0-1.5 0v2.521A10.74 10.74 0 0 0 12 1.25c-5.202 0-9.539 3.694-10.535 8.6a.75.75 0 0 0 1.47.3Z"/>
    </svg>
  );
}
