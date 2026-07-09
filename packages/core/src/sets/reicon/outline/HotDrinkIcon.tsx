import type { IconProps } from "../../../shared/types";

export function HotDrinkIcon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.667 1c-.03.841-.222 1.844-.896 2.667-.463.565-.848.672-1.292 1.229a3.4 3.4 0 0 0-.451.752m6.305-1.981c-.02.505-.148 1.106-.597 1.6-.17.186-.323.289-.476.4M5 9h14v4.667a6.67 6.67 0 0 1-6.667 6.666h-.666A6.67 6.67 0 0 1 5 13.667zm15.333 11.333H3.667M19 9h1.333C21.807 9 23 10.188 23 11.667s-1.193 2.666-2.667 2.666H19"/>
    </svg>
  );
}
