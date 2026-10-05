import type { IconProps } from "../../shared/types";

export function CompostBinIcon({
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
      <path d="M6 10v10h12V10ZM4 7h16"/><path d="M12 17c-3 0-4-2-4-4 3 0 4 2 4 4"/>
    </svg>
  );
}
