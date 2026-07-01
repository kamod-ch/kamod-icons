import type { IconProps } from "../../../shared/types";

export function PasswordXmarkIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m15.121 20.364 2.122-2.121m0 0 2.121-2.122m-2.121 2.122L15.12 16.12m2.122 2.122 2.121 2.121M21 13V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6m1-4.99.01-.011m3.99.011.01-.011M8 11.01l.01-.011"/>
    </svg>
  );
}
