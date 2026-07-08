import type { IconProps } from "../../../shared/types";

export function TextTool2Icon({
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
      <g transform="scale(1.33333)"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.25 12v.75a2 2 0 0 1-2 2H3.75a2 2 0 0 1-2-2V12m0-6v-.75a2 2 0 0 1 2-2h10.5a2 2 0 0 1 2 2V6"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m11.798 12.25-2.73-6.5h-.136l-2.73 6.5m.63-1.5h4.336"/><circle cx="1.75" cy="9" r=".75" fill="currentColor"/><circle cx="16.25" cy="9" r=".75" fill="currentColor"/></g>
    </svg>
  );
}
