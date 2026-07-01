import type { IconProps } from "../../../shared/types";

export function ArrowDownLeftSquareIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M20.4 21.75a1.35 1.35 0 0 0 1.35-1.35V3.6a1.35 1.35 0 0 0-1.35-1.35H3.6A1.35 1.35 0 0 0 2.25 3.6v16.8c0 .746.604 1.35 1.35 1.35zm-6.278-6.171h-4.95a.747.747 0 0 1-.75-.75v-4.95a.75.75 0 1 1 1.5 0v3.139l4.376-4.377a.75.75 0 0 1 1.061 1.061l-4.376 4.377h3.139a.75.75 0 1 1 0 1.5" clipRule="evenodd"/>
    </svg>
  );
}
