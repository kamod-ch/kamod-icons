import type { IconProps } from "../../../shared/types";

export function HardDriveIcon({
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
      <path fill="currentColor" d="M6.319 2.52c.675-.27 1.45-.27 2.573-.27h6.216c1.124 0 1.898 0 2.573.27A3.75 3.75 0 0 1 19.2 3.642c.457.565.684 1.305 1.014 2.38l2.082 6.766A5.7 5.7 0 0 0 19 11.75H5a5.7 5.7 0 0 0-3.296 1.038l2.082-6.767c.33-1.074.557-1.814 1.014-2.38A3.75 3.75 0 0 1 6.32 2.52Z"/><path fill="currentColor" fillRule="evenodd" d="M19 13.25a4.25 4.25 0 0 1 4.248 4.108v.033q.003.054.002.109A4.25 4.25 0 0 1 19 21.75H5a4.25 4.25 0 0 1 0-8.5zm-5 4.25a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm3 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" clipRule="evenodd"/>
    </svg>
  );
}
