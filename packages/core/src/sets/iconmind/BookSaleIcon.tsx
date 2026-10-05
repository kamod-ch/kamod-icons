import type { IconProps } from "../../shared/types";

export function BookSaleIcon({
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
      <path d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Zm4-2v18m4-6 7-7"/><path d="M12 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0m5 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
