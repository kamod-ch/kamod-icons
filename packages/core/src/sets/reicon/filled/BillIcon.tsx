import type { IconProps } from "../../../shared/types";

export function BillIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" fillRule="evenodd" d="M19.875 20.592a1.754 1.754 0 0 0-2.25 0 1.754 1.754 0 0 1-2.25 0 1.754 1.754 0 0 0-2.25 0 1.754 1.754 0 0 1-2.25 0 1.754 1.754 0 0 0-2.25 0 1.754 1.754 0 0 1-2.25 0 1.754 1.754 0 0 0-2.25 0c-.436.37-1.125.074-1.125-.483V3.891c0-.557.69-.853 1.125-.483a1.754 1.754 0 0 0 2.25 0 1.754 1.754 0 0 1 2.25 0 1.754 1.754 0 0 0 2.25 0 1.754 1.754 0 0 1 2.25 0 1.754 1.754 0 0 0 2.25 0 1.754 1.754 0 0 1 2.25 0 1.754 1.754 0 0 0 2.25 0c.436-.37 1.125-.074 1.125.483v16.218c0 .557-.69.853-1.125.483ZM6.75 12a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75-4.25a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5zm-.75 7.75a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Z" clipRule="evenodd"/>
    </svg>
  );
}
