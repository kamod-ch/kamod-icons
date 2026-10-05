import type { IconProps } from "../../shared/types";

export function MailQuestionIcon({
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
      <path d="M3 11.5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm2-2 7-7 7 7"/><path d="M9.5 14.5A2.5 2.5 0 1 1 12 17m-1 2.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
