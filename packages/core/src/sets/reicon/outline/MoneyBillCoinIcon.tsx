import type { IconProps } from "../../../shared/types";

export function MoneyBillCoinIcon({
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
      <path fill="currentColor" strokeWidth="1.333" d="M5.667 10.333a1 1 0 1 0-.001-2 1 1 0 0 0 0 2Z"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.258 11.598a2.666 2.666 0 0 1 2.16-4.824"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 16.333H5a2.666 2.666 0 0 1-2.667-2.666V5A2.666 2.666 0 0 1 5 2.333h14A2.666 2.666 0 0 1 21.667 5v.667m-1.334 8h-6c-.736 0-1.333.597-1.333 1.333v1.333c0 .736.597 1.334 1.333 1.334h6c.736 0 1.334-.598 1.334-1.334V15c0-.736-.598-1.333-1.334-1.333"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21.667 9.667h-6c-.736 0-1.334.597-1.334 1.333v1.333c0 .736.598 1.334 1.334 1.334h6c.736 0 1.333-.598 1.333-1.334V11c0-.736-.597-1.333-1.333-1.333m0 8h-6c-.736 0-1.334.597-1.334 1.333v1.333c0 .736.598 1.334 1.334 1.334h6c.736 0 1.333-.598 1.333-1.334V19c0-.736-.597-1.333-1.333-1.333"/>
    </svg>
  );
}
