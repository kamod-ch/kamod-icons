import type { IconProps } from "../../../shared/types";

export function BugIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 21c-3.866 0-7-4.03-7-9s3.134-9 7-9 7 4.03 7 9-3.134 9-7 9m6-3.5 2 2m-1-10 2-1m-16 1-2-1"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 8s-3 1-6 1M6 8s3 1 6 1m0 0v12m-7-7H2m20 0h-3M6 17.5l-2 2"/>
    </svg>
  );
}
