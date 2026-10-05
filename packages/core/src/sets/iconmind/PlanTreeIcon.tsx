import type { IconProps } from "../../shared/types";

export function PlanTreeIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M7 6.5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2 2 2 0 0 1-2 2H9a2 2 0 0 1-2-2m5 2V12m-6 3.5V12h12v3.5M2.5 17.75a2.25 2.25 0 0 1 2.25-2.25h2.5a2.25 2.25 0 0 1 2.25 2.25A2.25 2.25 0 0 1 7.25 20h-2.5a2.25 2.25 0 0 1-2.25-2.25m12 0a2.25 2.25 0 0 1 2.25-2.25h2.5a2.25 2.25 0 0 1 2.25 2.25A2.25 2.25 0 0 1 19.25 20h-2.5a2.25 2.25 0 0 1-2.25-2.25"/>
    </svg>
  );
}
