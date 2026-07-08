import type { IconProps } from "../../../shared/types";

export function EmojiNormal2Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M7 8.25c1 1 2.63 1 3.64 0m2.72 0c1 1 2.63 1 3.64 0M8.4 13h7.2c.5 0 .9.4.9.9 0 2.49-2.01 4.5-4.5 4.5s-4.5-2.01-4.5-4.5c0-.5.4-.9.9-.9"/>
    </svg>
  );
}
