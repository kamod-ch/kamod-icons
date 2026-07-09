import type { IconProps } from "../../../shared/types";

export function BicycleIcon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 19.667a4 4 0 1 0 0-8 4 4 0 0 0 0 8m-14 0a4 4 0 1 0 0-8 4 4 0 0 0 0 8M9.938 9.449l-.563-1.07a1.33 1.33 0 0 0-1.18-.712H5.667"/><path d="m19 15.667-4.875-12h5.042a1.833 1.833 0 1 1 0 3.666"/><path d="M5 15.667q7.186-2.49 10.96-7.484"/></g>
    </svg>
  );
}
