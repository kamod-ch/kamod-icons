import type { IconProps } from "../../../shared/types";

export function ArrowRotateIcon({
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
      <path fill="currentColor" d="M17.55 4.599A9.2 9.2 0 0 0 12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 8.827-6.475.75.75 0 1 1 1.43.45C20.889 19.585 16.816 22.75 12 22.75 6.063 22.75 1.25 17.937 1.25 12S6.063 1.25 12 1.25c2.42 0 4.654.8 6.45 2.15.745.56 1.535 1.352 2.2 2.12.21.243.412.489.6.729V2.5a.75.75 0 0 1 1.5 0V8a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1 0-1.5h3.629a19 19 0 0 0-.613-.748c-.628-.724-1.338-1.431-1.966-1.903Z"/>
    </svg>
  );
}
