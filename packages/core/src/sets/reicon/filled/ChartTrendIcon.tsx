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
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" d="M2 1a1 1 0 0 1 1 1v16.5A2.5 2.5 0 0 0 5.5 21H22a1 1 0 1 1 0 2H5.5A4.5 4.5 0 0 1 1 18.5V2a1 1 0 0 1 1-1Z"/><path fill="currentColor" d="M6 18v-1.5a1 1 0 1 1 2 0V18a1 1 0 1 1-2 0Zm4-3.35V18a1 1 0 1 0 2 0v-3.35a1 1 0 1 0-2 0ZM15 19a1 1 0 0 1-1-1v-5.2a1 1 0 1 1 2 0V18a1 1 0 0 1-1 1Zm3-1a1 1 0 1 0 2 0v-7a1 1 0 1 0-2 0zM15.25 3a1 1 0 0 1 1-1H20a1 1 0 0 1 1 1v3.75a1 1 0 1 1-2 0V5.5c-1.817 1.867-3.544 3.28-5.387 4.31-2.271 1.27-4.663 1.926-7.523 2.186a1 1 0 1 1-.18-1.992c2.64-.24 4.748-.834 6.727-1.94C14.296 7.139 15.901 5.83 17.67 4h-1.42a1 1 0 0 1-1-1Z"/>
    </svg>
  );
}
