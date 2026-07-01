import type { IconProps } from "../../../shared/types";

export function CashOffIcon({
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
      <path d="M13 9h6a2 2 0 0 1 2 2v6m-2 2H9a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2"/><path d="M12.582 12.59a2 2 0 0 0 2.83 2.826M17 9V7a2 2 0 0 0-2-2H9M5 5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2M3 3l18 18"/>
    </svg>
  );
}
