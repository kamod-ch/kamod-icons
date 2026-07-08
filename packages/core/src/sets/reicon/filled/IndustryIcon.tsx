import type { IconProps } from "../../../shared/types";

export function IndustryIcon({
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
      <path fill="currentColor" strokeWidth="1.333" d="M5.333 4.464a1 1 0 0 1-.856-1.516 3.35 3.35 0 0 1 2.858-1.615h2.333c.51 0 .984-.298 1.204-.758a1 1 0 0 1 1.804.862 3.35 3.35 0 0 1-3.008 1.896H7.335c-.472 0-.9.242-1.143.647-.188.31-.519.484-.857.484Zm16.754 2.295a1 1 0 0 0-1.068.145L16 11.169V7.665a1 1 0 0 0-1.648-.762l-6.261 5.329-.338-4.733a2.34 2.34 0 0 0-2.328-2.167h-.85c-1.219 0-2.24.952-2.328 2.167l-.81 11.333a2.34 2.34 0 0 0 .619 1.756c.44.472 1.063.744 1.708.744h16.57a2.336 2.336 0 0 0 2.333-2.333V7.667c0-.39-.227-.744-.58-.908ZM12.333 17h-.666a1 1 0 0 1 0-2h.666a1 1 0 0 1 0 2Zm5.334 0H17a1 1 0 0 1 0-2h.667a1 1 0 0 1 0 2Z"/>
    </svg>
  );
}
