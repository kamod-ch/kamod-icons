import type { IconProps } from "../../shared/types";

export function ShieldQuestionIcon({
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
      <path d="M15 5h5v8l-8 8-8-8V5h5"/><path d="M9.5 10a2.5 2.5 0 1 1 2.5 2.5M11 15a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
