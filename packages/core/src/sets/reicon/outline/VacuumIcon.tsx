import type { IconProps } from "../../../shared/types";

export function VacuumIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5ZM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12c0 1.64-.367 3.195-1.025 4.586a3.75 3.75 0 0 1-5.14 5.14A10.7 10.7 0 0 1 12 22.75c-1.64 0-3.195-.367-4.586-1.025a3.75 3.75 0 0 1-5.14-5.14A10.7 10.7 0 0 1 1.25 12Zm2.012 6.263a2.25 2.25 0 0 0 2.475 2.475 10.8 10.8 0 0 1-2.475-2.475Zm15.002 2.475q.116.012.236.012a2.25 2.25 0 0 0 2.238-2.486 10.8 10.8 0 0 1-2.474 2.474ZM12 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM8.25 9a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM12 15.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z" clipRule="evenodd"/>
    </svg>
  );
}
