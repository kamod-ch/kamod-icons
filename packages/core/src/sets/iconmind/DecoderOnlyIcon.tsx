import type { IconProps } from "../../shared/types";

export function DecoderOnlyIcon({
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
      <path d="m8 8 4 4-4 4-4-4Zm7 4h6m-2.5-2.5L21 12l-2.5 2.5"/>
    </svg>
  );
}
