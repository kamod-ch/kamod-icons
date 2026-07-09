import type { IconProps } from "../../../shared/types";

export function AlertTriangle2Icon({
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
      <path fill="currentColor" fillRule="evenodd" d="M9.179 3.879c1.25-2.172 4.391-2.172 5.642 0l7.493 13.008c1.248 2.167-.324 4.863-2.821 4.863H4.507c-2.497 0-4.07-2.696-2.82-4.863zM11.25 14V8a.75.75 0 0 1 1.5 0v6a.75.75 0 0 1-1.5 0ZM11 17.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" clipRule="evenodd"/>
    </svg>
  );
}
