import type { IconProps } from "../../../shared/types";

export function PaperAirplaneIcon({
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
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.8 59.8 0 0 1 21.485 12 59.8 59.8 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"/>
    </svg>
  );
}
