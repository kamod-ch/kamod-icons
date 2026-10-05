import type { IconProps } from "../../shared/types";

export function NewspaperIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M2 19V6h16v13ZM18 9h4v8h-4M4 10h12m-6 3v4m-6-4h12"/>
    </svg>
  );
}
