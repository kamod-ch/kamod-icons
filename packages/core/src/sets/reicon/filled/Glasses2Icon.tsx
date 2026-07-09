import type { IconProps } from "../../../shared/types";

export function Glasses2Icon({
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
      <path fill="currentColor" d="M3.205 4.918a2.75 2.75 0 0 1 3.983-1.842l1.165.623a.75.75 0 0 1-.706 1.323l-1.165-.623a1.25 1.25 0 0 0-1.811.838L3.2 12.009l-.07.333a5.002 5.002 0 0 1 7.89 2.408h1.959a5.002 5.002 0 0 1 7.89-2.408l-.069-.333-1.47-6.772a1.25 1.25 0 0 0-1.811-.838l-1.165.623a.75.75 0 1 1-.707-1.323l1.165-.623a2.75 2.75 0 0 1 3.983 1.842l1.47 6.773c.323 1.481.485 2.993.485 4.51v.049a5 5 0 0 1-10 0h-1.5a5 5 0 0 1-10 0v-.049c0-1.517.162-3.029.484-4.51z"/>
    </svg>
  );
}
