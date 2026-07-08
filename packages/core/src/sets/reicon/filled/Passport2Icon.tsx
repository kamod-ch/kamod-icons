import type { IconProps } from "../../../shared/types";

export function Passport2Icon({
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
      <path fill="currentColor" d="M5 5a1 1 0 0 0-.591-.913c.144-.113.318-.19.51-.218l10.798-1.543A2 2 0 0 1 18 4.306v.82A4 4 0 0 0 17 5zm4.75 9a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z"/><path fill="currentColor" fillRule="evenodd" d="M18 6.17c1.165.413 2 1.524 2 2.83v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a1 1 0 0 0 1 1h12c.35 0 .687.06 1 .17Zm-6 4.08a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z" clipRule="evenodd"/>
    </svg>
  );
}
