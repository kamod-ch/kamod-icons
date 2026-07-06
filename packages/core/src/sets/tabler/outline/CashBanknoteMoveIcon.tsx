import type { IconProps } from "../../../shared/types";

export function CashBanknoteMoveIcon({
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
      <path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0"/><path d="M12 18H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4.5m-3-.5h.01M6 12h.01M16 19h6m-3-3 3 3-3 3"/>
    </svg>
  );
}
