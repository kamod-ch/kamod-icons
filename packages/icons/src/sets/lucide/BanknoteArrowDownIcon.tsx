import type { IconProps } from "../../shared/types";

export function BanknoteArrowDownIcon({
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
      <path d="M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5m-6 6 3 3 3-3m-4-7h.01m.99 4v6M6 12h.01"/><circle cx="12" cy="12" r="2"/>
    </svg>
  );
}
