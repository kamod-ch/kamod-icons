import type { IconProps } from "../../../shared/types";

export function MoneyPlusIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M6.567 2.25h9.866c.952 0 1.713 0 2.327.05.63.052 1.172.16 1.67.413a4.25 4.25 0 0 1 1.857 1.858c.253.497.361 1.04.413 1.67.05.613.05 1.374.05 2.326v2.481a.75.75 0 0 1-.897.735 6.85 6.85 0 0 0-8.188 7.168.75.75 0 0 1-.749.799H6.567c-.952 0-1.713 0-2.327-.05-.63-.052-1.172-.16-1.67-.413A4.25 4.25 0 0 1 .714 17.43C.46 16.932.352 16.39.3 15.76c-.05-.614-.05-1.375-.05-2.327V8.567c0-.952 0-1.713.05-2.327.052-.63.16-1.172.413-1.67a4.25 4.25 0 0 1 1.858-1.857c.497-.253 1.04-.361 1.67-.413.613-.05 1.374-.05 2.326-.05ZM11.5 7.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM4 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" clipRule="evenodd"/><path fill="currentColor" d="M23 18.75a.75.75 0 0 0 0-1.5h-2.25V15a.75.75 0 0 0-1.5 0v2.25H17a.75.75 0 0 0 0 1.5h2.25V21a.75.75 0 0 0 1.5 0v-2.25z"/>
    </svg>
  );
}
