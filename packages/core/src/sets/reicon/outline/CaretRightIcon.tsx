import type { IconProps } from "../../../shared/types";

export function CaretRightIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M17.12 13.56a2.25 2.25 0 0 0 0-3.119l-5.343-5.558c-1.279-1.331-3.527-.426-3.527 1.42v11.394c0 1.846 2.248 2.752 3.528 1.421zm-1.08-2.08a.75.75 0 0 1 0 1.04l-5.344 5.558a.55.55 0 0 1-.946-.38V6.302a.55.55 0 0 1 .946-.38z" clipRule="evenodd"/>
    </svg>
  );
}
