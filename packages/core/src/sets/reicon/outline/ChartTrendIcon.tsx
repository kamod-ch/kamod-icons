import type { IconProps } from "../../../shared/types";

export function ChartTrendIcon({
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
      <path fill="currentColor" d="M2 1.25a.75.75 0 0 1 .75.75v16.5a2.75 2.75 0 0 0 2.75 2.75H22a.75.75 0 0 1 0 1.5H5.5a4.25 4.25 0 0 1-4.25-4.25V2A.75.75 0 0 1 2 1.25Z"/><path fill="currentColor" d="M6.25 18v-1.5a.75.75 0 0 1 1.5 0V18a.75.75 0 0 1-1.5 0Zm4-3.35V18a.75.75 0 0 0 1.5 0v-3.35a.75.75 0 0 0-1.5 0Zm4.75 4.1a.75.75 0 0 1-.75-.75v-5.2a.75.75 0 0 1 1.5 0V18a.75.75 0 0 1-.75.75Zm3.25-.75a.75.75 0 0 0 1.5 0v-7a.75.75 0 0 0-1.5 0zM15.5 3a.75.75 0 0 1 .75-.75H20a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V4.878c-1.966 2.08-3.8 3.62-5.76 4.714-2.234 1.249-4.59 1.897-7.422 2.155a.75.75 0 1 1-.136-1.494c2.668-.242 4.812-.844 6.827-1.97 1.813-1.013 3.554-2.469 5.493-4.533H16.25A.75.75 0 0 1 15.5 3Z"/>
    </svg>
  );
}
