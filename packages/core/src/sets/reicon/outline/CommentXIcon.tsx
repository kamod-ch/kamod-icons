import type { IconProps } from "../../../shared/types";

export function CommentXIcon({
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
      <path fill="currentColor" d="M15.03 15.03a.75.75 0 0 1-1.06 0L12 13.06l-1.97 1.97a.75.75 0 1 1-1.06-1.06L10.94 12l-1.97-1.97a.75.75 0 1 1 1.06-1.06L12 10.94l1.97-1.97a.75.75 0 0 1 1.06 1.06L13.06 12l1.97 1.97a.75.75 0 0 1 0 1.06Z"/><path fill="currentColor" fillRule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75c-2.042 0-3.952-.57-5.58-1.56l-2.15.782c-1.396.508-2.75-.846-2.243-2.242l.782-2.15A10.7 10.7 0 0 1 1.25 12ZM12 2.75A9.25 9.25 0 0 0 2.75 12c0 1.793.51 3.465 1.391 4.882.2.32.254.725.118 1.1l-.822 2.26a.25.25 0 0 0 .32.32l2.261-.821c.375-.136.78-.082 1.1.117A9.2 9.2 0 0 0 12 21.25a9.25 9.25 0 0 0 0-18.5Z" clipRule="evenodd"/>
    </svg>
  );
}
