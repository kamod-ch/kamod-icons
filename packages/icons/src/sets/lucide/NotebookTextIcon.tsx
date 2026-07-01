import type { IconProps } from "../../shared/types";

export function NotebookTextIcon({
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
      <path d="M2 6h4m-4 4h4m-4 4h4m-4 4h4"/><rect x="4" y="2" rx="2"/><path d="M9.5 8h5m-5 4H16m-6.5 4H14"/>
    </svg>
  );
}
