import type { IconProps } from "../../shared/types";

export function PlayingCardIcon({
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
      <path d="M6 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Z"/><path d="M12 17c-2.5-2-6-5-4.5-8 1-2 3-1.5 4.5.5 1.5-2 3.5-2.5 4.5-.5 1.5 3-2 6-4.5 8"/>
    </svg>
  );
}
