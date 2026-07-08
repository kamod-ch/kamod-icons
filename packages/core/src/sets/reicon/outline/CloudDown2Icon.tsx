import type { IconProps } from "../../../shared/types";

export function CloudDown2Icon({
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
      <path fill="currentColor" d="M12 8.25a.75.75 0 0 1 .75.75v6.19l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72V9a.75.75 0 0 1 .75-.75Z"/><path fill="currentColor" fillRule="evenodd" d="M4.25 11A7.75 7.75 0 0 1 19.6 9.476 5.752 5.752 0 0 1 18 20.75H5a4.75 4.75 0 0 1-.744-9.442A8 8 0 0 1 4.25 11ZM12 4.75a6.25 6.25 0 0 0-6.187 7.144.75.75 0 0 1-.755.857L5 12.75a3.25 3.25 0 0 0 0 6.5h13a4.25 4.25 0 0 0 .8-8.425.75.75 0 0 1-.603-.64A6.25 6.25 0 0 0 12 4.75Z" clipRule="evenodd"/>
    </svg>
  );
}
