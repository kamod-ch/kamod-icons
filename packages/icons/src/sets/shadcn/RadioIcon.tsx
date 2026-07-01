import type { IconProps } from "../../shared/types";

export function RadioIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-7.07 5.07a10 10 0 0 1 0-14.14m2.83 11.31a6 6 0 0 1 0-8.49m8.48.01a6 6 0 0 1 1.3 2 6 6 0 0 1-1.3 6.54m2.83-11.37a10 10 0 0 1 0 14.14"/>
    </svg>
  );
}
