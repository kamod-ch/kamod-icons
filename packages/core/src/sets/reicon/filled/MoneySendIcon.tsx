import type { IconProps } from "../../../shared/types";

export function MoneySendIcon({
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
      <g fill="currentColor" clipPath="url(#a)"><path d="M11.25 9a.75.75 0 0 0 1.5 0V2.81l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 1.06 1.06l1.72-1.72z"/><path fillRule="evenodd" d="M7.067 7.25H9a.75.75 0 0 1 .75.75v1a2.25 2.25 0 0 0 4.5 0V8a.75.75 0 0 1 .75-.75h1.933c.952 0 1.713 0 2.327.05.63.052 1.172.16 1.67.413a4.25 4.25 0 0 1 1.857 1.858c.253.498.361 1.04.413 1.67.05.614.05 1.374.05 2.327v3.865c0 .952 0 1.713-.05 2.327-.052.63-.16 1.172-.413 1.67a4.25 4.25 0 0 1-1.857 1.857c-.498.254-1.04.362-1.67.413-.614.05-1.375.05-2.327.05H7.067c-.952 0-1.713 0-2.327-.05-.63-.051-1.172-.16-1.67-.413a4.25 4.25 0 0 1-1.857-1.857C.96 20.932.852 20.39.8 19.76c-.05-.614-.05-1.375-.05-2.327v-3.865c0-.953 0-1.713.05-2.328.052-.63.16-1.171.413-1.67a4.25 4.25 0 0 1 1.858-1.857c.497-.253 1.04-.361 1.67-.413.613-.05 1.374-.05 2.326-.05ZM12 12a3.5 3.5 0 1 0 3.5 3.5c0-1.842-1.57-3.5-3.5-3.5Zm-7.5 3.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm13 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" clipRule="evenodd"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z"/></clipPath></defs>
    </svg>
  );
}
