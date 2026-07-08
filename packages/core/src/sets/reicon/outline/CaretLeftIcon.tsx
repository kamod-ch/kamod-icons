import type { IconProps } from "../../../shared/types";

export function CaretLeftIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M6.878 13.56a2.25 2.25 0 0 1 0-3.119l5.343-5.558c1.28-1.33 3.528-.425 3.528 1.42v11.395c0 1.845-2.248 2.75-3.528 1.42zm1.081-2.08a.75.75 0 0 0 0 1.04l5.344 5.559a.55.55 0 0 0 .946-.381V6.304a.55.55 0 0 0-.946-.382z" clipRule="evenodd"/>
    </svg>
  );
}
