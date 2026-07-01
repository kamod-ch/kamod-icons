import type { IconProps } from "../../../shared/types";

export function SubmitDocumentIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20 13V5.749a.6.6 0 0 0-.176-.425l-3.148-3.148A.6.6 0 0 0 16.252 2H4.6a.6.6 0 0 0-.6.6v18.8a.6.6 0 0 0 .6.6H14"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 2v3.4a.6.6 0 0 0 .6.6H20m-4 13h6m0 0-3-3m3 3-3 3"/>
    </svg>
  );
}
