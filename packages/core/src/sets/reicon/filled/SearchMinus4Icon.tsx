import type { IconProps } from "../../../shared/types";

export function SearchMinus4Icon({
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
      <path fill="currentColor" fillRule="evenodd" d="M1.25 10.5a9.25 9.25 0 0 1 18.5 0 9.2 9.2 0 0 1-2.2 5.989l4.98 4.98a.75.75 0 1 1-1.06 1.061l-4.981-4.98a9.2 9.2 0 0 1-5.989 2.2 9.25 9.25 0 0 1-9.25-9.25Zm12.25.75a.75.75 0 0 0 0-1.5h-6a.75.75 0 0 0 0 1.5z" clipRule="evenodd"/>
    </svg>
  );
}
