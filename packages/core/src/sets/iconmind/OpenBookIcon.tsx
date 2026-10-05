import type { IconProps } from "../../shared/types";

export function OpenBookIcon({
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
      <path d="M12 8Q9 5 3 5v12q6 0 9 3m0-12q3-3 9-3v12q-6 0-9 3"/><path d="m15 17 2 2 4-4"/>
    </svg>
  );
}
