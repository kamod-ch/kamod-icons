import type { IconProps } from "../../../shared/types";

export function Pharagraphspacing2Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 22h18M3 2h18m-9 4v12m2.83-10.28L12 4.89 9.17 7.72m5.66 8.17L12 18.72l-2.83-2.83"/>
    </svg>
  );
}
