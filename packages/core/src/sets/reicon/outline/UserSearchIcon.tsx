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
      fill="none"
      stroke="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9.667a3.666 3.666 0 1 0 0-7.332 3.666 3.666 0 0 0 0 7.332m5.333 10.667a3 3 0 1 0 .002-5.999 3 3 0 0 0-.002 5.999m2.12-.88 2.214 2.213m-9.796-8.657a8.32 8.32 0 0 0-7.483 4.95c-.487 1.1.116 2.366 1.263 2.727 1.605.506 3.725.958 6.222.973"/>
    </svg>
  );
}
