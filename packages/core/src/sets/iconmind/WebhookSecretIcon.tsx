import type { IconProps } from "../../shared/types";

export function WebhookSecretIcon({
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
      <path d="M3 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path d="m14 5-2.5 2.5H14L11.5 10M10 14.5a2 2 0 1 0 4 0 2 2 0 1 0-4 0m2 2V19m0-1.5h2.5"/>
    </svg>
  );
}
