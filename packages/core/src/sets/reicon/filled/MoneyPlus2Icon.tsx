import type { IconProps } from "../../../shared/types";

export function MoneyPlus2Icon({
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
      <path fill="currentColor" fillRule="evenodd" d="M16.433 3.25H6.567c-.952 0-1.713 0-2.327.05-.63.052-1.172.16-1.67.413A4.25 4.25 0 0 0 .714 5.571C.46 6.068.352 6.61.3 7.24.25 7.853.25 8.614.25 9.566v4.866c0 .952 0 1.713.05 2.327.052.63.16 1.172.413 1.67a4.25 4.25 0 0 0 1.858 1.857c.497.253 1.04.361 1.67.413.613.05 1.374.05 2.326.05h6.35a.75.75 0 0 0 .748-.799q-.015-.224-.015-.451a6.85 6.85 0 0 1 8.203-6.717.75.75 0 0 0 .897-.735v-2.48c0-.953 0-1.714-.05-2.328-.052-.63-.16-1.172-.413-1.67a4.25 4.25 0 0 0-1.857-1.857c-.498-.253-1.04-.361-1.67-.413-.614-.05-1.375-.05-2.327-.05ZM11.5 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM4 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" clipRule="evenodd"/><path fill="currentColor" d="M23.75 18a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75Z"/>
    </svg>
  );
}
