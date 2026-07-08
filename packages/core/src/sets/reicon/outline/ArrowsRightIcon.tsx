import type { IconProps } from "../../../shared/types";

export function ArrowsRightIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M6.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.138-.976L12.012 12 6.431 5.488a.75.75 0 0 1 .08-1.057Zm4 0a.75.75 0 0 1 1.058.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.14-.976L16.013 12l-5.581-6.512a.75.75 0 0 1 .081-1.057Z" clipRule="evenodd"/>
    </svg>
  );
}
