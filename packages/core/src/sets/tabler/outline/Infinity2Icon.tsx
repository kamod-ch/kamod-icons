import type { IconProps } from "../../../shared/types";

export function Infinity2Icon({
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
      <path d="M13.94 9.39a10 10 0 0 1 .232-.218 4 4 0 1 1 0 5.656A10 10 0 0 1 12 12a10 10 0 0 0-2.172-2.828 4 4 0 1 0 0 5.656 10 10 0 0 0 .234-.219"/>
    </svg>
  );
}
