import type { IconProps } from "../../shared/types";

export function AskQuestionIcon({
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
      <path d="M4 4h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-6l-4 4v-4H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"/><path d="M9 8a2.5 2.5 0 0 1 5 0c0 2-2.5 2-2.5 3.5m-1 1.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
