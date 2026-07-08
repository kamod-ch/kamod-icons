import type { IconProps } from "../../../shared/types";

export function MoneyBillIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M7.067 3.25h9.866c.952 0 1.713 0 2.327.05.63.052 1.172.16 1.67.413a4.25 4.25 0 0 1 1.857 1.858c.253.497.361 1.04.413 1.67.05.613.05 1.374.05 2.326v4.866c0 .952 0 1.713-.05 2.327-.052.63-.16 1.172-.413 1.67a4.25 4.25 0 0 1-1.857 1.857c-.498.253-1.04.361-1.67.413-.614.05-1.375.05-2.327.05H7.067c-.952 0-1.713 0-2.327-.05-.63-.052-1.172-.16-1.67-.413a4.25 4.25 0 0 1-1.857-1.857C.96 17.932.852 17.39.8 16.76c-.05-.614-.05-1.375-.05-2.327V9.567c0-.952 0-1.713.05-2.327.052-.63.16-1.172.413-1.67a4.25 4.25 0 0 1 1.858-1.857c.497-.253 1.04-.361 1.67-.413.613-.05 1.374-.05 2.326-.05ZM12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.5 3.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm-13 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" clipRule="evenodd"/>
    </svg>
  );
}
