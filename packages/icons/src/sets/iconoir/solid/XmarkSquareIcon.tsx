import type { IconProps } from "../../../shared/types";

export function XmarkSquareIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M3.6 2.25A1.35 1.35 0 0 0 2.25 3.6v16.8c0 .746.604 1.35 1.35 1.35h16.8a1.35 1.35 0 0 0 1.35-1.35V3.6a1.35 1.35 0 0 0-1.35-1.35zm6.809 7.098a.75.75 0 0 0-1.06 1.061L10.938 12l-1.59 1.591a.75.75 0 0 0 1.06 1.06L12 13.062l1.591 1.59a.75.75 0 0 0 1.06-1.06L13.062 12l1.59-1.591a.75.75 0 0 0-1.06-1.06L12 10.938z" clipRule="evenodd"/>
    </svg>
  );
}
