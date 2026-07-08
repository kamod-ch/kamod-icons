import type { IconProps } from "../../../shared/types";

export function StopwatchOffIcon({
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
      <path fill="currentColor" d="M9 .75a.75.75 0 0 0 0 1.5h2.25v1.528a9.7 9.7 0 0 0-2.49.524.75.75 0 0 0 .498 1.414 8.25 8.25 0 0 1 10.526 10.526.75.75 0 1 0 1.415.498 9.7 9.7 0 0 0 .551-3.24c0-2.55-.979-4.87-2.581-6.608L20.53 5.53a.75.75 0 1 0-1.06-1.06l-1.4 1.4a9.7 9.7 0 0 0-5.32-2.092V2.25H15a.75.75 0 0 0 0-1.5z"/><path fill="currentColor" fillRule="evenodd" d="m6.969 5.908 12.623 12.624.018.017 2.92 2.92a.75.75 0 1 1-1.06 1.061l-2.36-2.359A9.73 9.73 0 0 1 12 23.25a9.75 9.75 0 0 1-9.75-9.75 9.73 9.73 0 0 1 3.08-7.11L1.47 2.53a.75.75 0 0 1 1.06-1.06l4.421 4.42zm11.08 13.202L6.39 7.45a8.25 8.25 0 1 0 11.66 11.66Z" clipRule="evenodd"/>
    </svg>
  );
}
