import type { IconProps } from "../../shared/types";

export function PaperclipIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21.44 11.05-9.19 9.19a6.003 6.003 0 1 1-8.49-8.49l8.57-8.57A4.006 4.006 0 0 1 18 8.84l-8.59 8.57a2.001 2.001 0 1 1-2.83-2.83l8.49-8.48"/>
    </svg>
  );
}
