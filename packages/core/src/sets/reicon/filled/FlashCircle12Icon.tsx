import type { IconProps } from "../../../shared/types";

export function FlashCircle12Icon({
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
      <path fill="currentColor" d="M11.97 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.47-10-10-10Zm3.75 10.35L12 16.58l-.44.5c-.61.69-1.11.51-1.11-.42V12.7h-1.7c-.77 0-.98-.47-.47-1.05L12 7.42l.44-.5c.61-.69 1.11-.51 1.11.42v3.96h1.7c.77 0 .98.47.47 1.05Z"/>
    </svg>
  );
}
