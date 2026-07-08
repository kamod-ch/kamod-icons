import type { IconProps } from "../../../shared/types";

export function MusicNote2Icon({
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
      <path fill="currentColor" fillRule="evenodd" d="M13.75 2c0 2.9 2.35 5.25 5.25 5.25a.75.75 0 0 1 0 1.5 6.74 6.74 0 0 1-5.25-2.507V18a4.75 4.75 0 1 1-1.5-3.464V2zm-1.5 16a3.25 3.25 0 1 0-6.5 0 3.25 3.25 0 0 0 6.5 0Z" clipRule="evenodd"/>
    </svg>
  );
}
