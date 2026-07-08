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
      fill="none"
      stroke="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" d="M11 17.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm.25-9.5v6a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-1.5 0Z"/><path fill="currentColor" fillRule="evenodd" d="M9.179 3.879c1.25-2.172 4.391-2.172 5.642 0l7.493 13.008c1.248 2.167-.324 4.863-2.821 4.863H4.507c-2.497 0-4.07-2.696-2.82-4.863zm4.342.748c-.674-1.17-2.369-1.17-3.042 0L2.986 17.636c-.668 1.16.17 2.614 1.521 2.614h14.986c1.351 0 2.19-1.454 1.52-2.614z" clipRule="evenodd"/>
    </svg>
  );
}
