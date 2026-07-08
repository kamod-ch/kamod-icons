import type { IconProps } from "../../../shared/types";

export function UserSearchIcon({
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
      <g fill="currentColor" strokeWidth="1.333"><path fillRule="evenodd" d="M17.333 13.333a4 4 0 1 0 0 8c.742 0 1.437-.202 2.032-.553l1.595 1.594a1 1 0 0 0 1.414-1.414l-1.594-1.595a4 4 0 0 0-3.446-6.032Zm-2 4a2 2 0 1 1 3.999-.001 2 2 0 0 1-3.999.001Z" clipRule="evenodd"/><path d="M14.35 22.541a6 6 0 0 1-3.017-5.208 6 6 0 0 1 2.813-5.085A9.3 9.3 0 0 0 12 12a9.32 9.32 0 0 0-8.526 5.556c-.739 1.669.185 3.553 1.876 4.086a22.1 22.1 0 0 0 9 .899ZM12 10a4.333 4.333 0 1 0 0-8.666 4.333 4.333 0 0 0 0 8.667Z"/></g>
    </svg>
  );
}
